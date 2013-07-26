require('classtool');

function ClassSpec(b) {
	var net = require('net');
	var Conn = require('./Conn').class();
	var IrcReplies = require('./replies');
	var validate = require('./validate');

	function Server(cfg) {
		if (typeof cfg !== 'object')
			cfg = {};
		this.port = cfg.port || 12667;
		this.hostname = cfg.hostname || 'localhost';
		this.version = cfg.server_version;
		this.trace = cfg.trace;
		this.srv = undefined;
		this.clients = [];
		this.cli_by_nick = {};
		this.cli_by_user = {};
		this.ctime = undefined;

		this.user_modes = 'aiwroOs';
		this.chan_modes = 'oOvaimnqpsrtklbeI';
	};

	Server.prototype.reply = function(conn, msg) {
		msg.prefix = this.hostname;
		conn.send(msg);
	}

	Server.prototype.connEnd = function(info) {
		var addr = info.conn.remoteAddress;
		var conn = info.conn;
		for (var i = 0; i < this.clients.length; i++) {
			if (this.clients[i] == conn) {
				this.clients.splice(i, 1);
				break;
			}
		}

		if (conn.nick)
			delete this.cli_by_nick[conn.nick];
		if (conn.user)
			delete this.cli_by_user[conn.user];

		console.log('Disconnected', addr);
	};

	Server.prototype.connMessage = function(info) {
		console.log(info.socket.remoteAddress, ":", info.message);
	};

	Server.prototype.connNick = function(info) {
		var conn = info.conn;
		var nick = info.message.nick;
		if (!nick) {
			var msg = IrcReplies.ERR_NONICKNAMEGIVEN();
			this.reply(conn, msg);
			return;
		}
		if (!validate.nick(nick)) {
			var msg = IrcReplies.ERR_ERRONEUSNICKNAME(nick);
			this.reply(conn, msg);
			return;
		}
		if (nick in this.cli_by_nick) {
			var msg = IrcReplies.ERR_NICKNAMEINUSE(nick);
			this.reply(conn, msg);
			return;
		}

		if (conn.nick)
			delete this.cli_by_nick[conn.nick];

		conn.nick = nick;
		this.cli_by_nick[nick] = conn;
	};

	Server.prototype.connPing = function(info) {
		var conn = info.conn;

		if (!info.message.irc_trailer) {
			info.message.irc_trailer = info.message.irc_params;
			info.message.irc_params = undefined;
		}
		if (!info.message.irc_params)
			info.message.irc_params = this.hostname;

		if (info.message.irc_params &&
		    (info.message.irc_params != this.hostname)) {
			var msg = IrcReplies.ERR_NOSUCHSERVER(info.message.irc_params);
			this.reply(conn, msg);
			return;
		}

		var msg = {
			prefix: undefined,
			command: 'PONG',
			params: info.message.irc_params,
			trailer: info.message.irc_trailer,
		};
		this.reply(conn, msg);
	};

	Server.prototype.connUser = function(info) {
		var conn = info.conn;
		var user = info.message.user;
		var username = user[0];
		if (!user || user.length < 4 ||
		    !validate.user(username)) {
			var msg = IrcReplies.ERR_NEEDMOREPARAMS('USER');
			this.reply(conn, msg);
			return;
		}
		if (!conn.nick) {
			var msg = IrcReplies.ERR_NONICKNAMEGIVEN();
			this.reply(conn, msg);
			return;
		}

		if (conn.user)
			delete this.cli_by_user[conn.user];

		conn.user = username;
		conn.user_host = user[2];
		conn.user_realname = user[3];
		this.cli_by_user[username] = conn;

		var msg = IrcReplies.RPL_WELCOME(conn.nick);
		this.reply(conn, msg);

		var msg = IrcReplies.RPL_YOURHOST(conn.nick, this.hostname,
						  'dirc-' +this.version);
		this.reply(conn, msg);

		var msg = IrcReplies.RPL_CREATED(conn.nick,
						 this.ctime.toISOString());
		this.reply(conn, msg);

		var msg = IrcReplies.RPL_MYINFO(conn.nick, this.hostname,
						'dirc-' +this.version,
						this.user_modes,
						this.chan_modes);
		this.reply(conn, msg);
	};

	Server.prototype.connWhoisUser = function(conn, mask) {
		var msg = undefined;
		if (!(mask in this.cli_by_nick)) {
			msg = IrcReplies.ERR_NOSUCHNICK(mask);
			this.reply(conn, msg);
			return;
		}

		// TODO: exact match is incorrect. must match mask.
		var connUser = this.cli_by_nick[mask];

		msg = IrcReplies.RPL_WHOISUSER(connUser.nick,
					       connUser.user,
					       connUser.user_host,
					       connUser.user_realname);
		this.reply(conn, msg);

		msg = IrcReplies.RPL_WHOISSERVER(connUser.nick,
						 this.hostname,
						 "dirc");
		this.reply(conn, msg);
	};

	Server.prototype.connWhois = function(info) {
		var conn = info.conn;
		var whois = info.message.whois;
		var masks = whois.masks;

		if (masks.target && masks.target != this.hostname) {
			var msg = IrcReplies.ERR_NOSUCHSERVER(masks.target);
			this.reply(conn, msg);
			return;
		}

		var us = this;
		masks.forEach(function(mask) {
			us.connWhoisUser(conn, mask);
		});

		var msg = IrcReplies.RPL_ENDOFWHOIS(conn.nick);
		this.reply(conn, msg);
	};

	Server.prototype.connNew = function(connSocket) {
		console.log("Connected", connSocket.remoteAddress);
		var conn = new Conn({
			srv: this,
			socket: connSocket,
			trace: this.trace,
		});
		this.clients.push(conn);

		var us = this;
		conn.on('message', function(info) { us.connMessage(info); });
		conn.on('end', function(info) { us.connEnd(info); });
		conn.on('NICK', function(info) { us.connNick(info); });
		conn.on('USER', function(info) { us.connUser(info); });
		conn.on('PING', function(info) { us.connPing(info); });
		conn.on('WHOIS', function(info) { us.connWhois(info); });

		conn.start();
	};

	Server.prototype.srvBound = function() {
		// server is now up (bound and listening)
		console.log("IRC server listening");
	};

	Server.prototype.create = function() {
		var us = this;
		this.srv = net.createServer(function(conn) {
			us.connNew(conn);
		});

		this.ctime = new Date();
	};

	Server.prototype.start = function() {
		var us = this;
		this.srv.listen(this.port, function() {
			us.srvBound();
		});
	};

	return Server;
};
module.defineClass(ClassSpec);

