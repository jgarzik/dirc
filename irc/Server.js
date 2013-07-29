require('classtool');

function ClassSpec(b) {
	var net = require('net');
	var Conn = require('./Conn').class();
	var ConnMgr = require('./ConnMgr').class();
	var Channel = require('./Channel').class();
	var ChanUser = require('./ChanUser').class();
	var ChanMgr = require('./ChanMgr').class();
	var RPL = require('./RPL');
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
		this.connmgr = new ConnMgr();
		this.chanmgr = new ChanMgr();
		this.ctime = undefined;

		this.user_modes = 'aiwroOs';
		this.chan_modes = 'oOvaimnqpsrtklbeI';
	};

	function composeUserStr(conn) {
		return conn.nick + "!~" + conn.user + "@" + conn.remoteAddress;
	};

	function replyUser(conn, msg) {
		msg.prefix = composeUserStr(conn);
		conn.send(msg);
	};

	Server.prototype.reply = function(conn, msg) {
		msg.prefix = this.hostname;
		conn.send(msg);
	}

	Server.prototype.connEnd = function(info, quitMsg) {
		var addr = info.conn.remoteAddress;
		var conn = info.conn;

		if (!quitMsg) {
			quitMsg = {
				prefix: composeUserStr(conn),
				command: 'QUIT',
				params: undefined,
				trailer: 'Remote host closed the connection',
			};
		}

		this.connmgr.sendCommonChan(conn, quitMsg);
		this.chanmgr.deleteConn(conn);
		this.connmgr.delete(conn);

		console.log('Disconnected', addr);
	};

	Server.prototype.connMessage = function(info) {
		console.log(info.socket.remoteAddress, ":", info.message);
	};

	// TODO: support more than one channel per command
	Server.prototype.connJoin = function(info) {
		var conn = info.conn;
		if (!conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

		var chan_name = info.message.irc_params;
		if (!chan_name) {
			var msg = IrcReplies.ERR_NEEDMOREPARAMS('USER');
			this.reply(conn, msg);
			return;
		}
		if (!validate.channel(chan_name)) {
			var msg = IrcReplies.ERR_BADCHANMASK(chan_name);
			this.reply(conn, msg);
			return;
		}

		var newChan = false;
		var chan = this.chanmgr.get(chan_name);
		if (!chan) {
			chan = new Channel({ chan_name: chan_name });
			this.chanmgr.add(chan);
			newChan = true;
		}

		var user = chan.get(conn.nick);
		if (user)
			return;
		user = new ChanUser({ conn: conn });
		if (newChan)
			user.flags.op = true;

		chan.add(user);

		var msg = {
			prefix: composeUserStr(conn),
			command: 'JOIN',
			params: chan_name,
			trailer: undefined,
		};

		chan.send(msg);

		if (chan.topic) {
			msg = IrcReplies.RPL_TOPIC(chan_name, chan.topic);
			this.reply(conn, msg);
		} else {
			msg = IrcReplies.RPL_NOTOPIC(chan_name);
			this.reply(conn, msg);
		}

		var userList = chan.userList();
		var us = this;
		var msgTemp = {
			prefix: us.hostname,
			command: RPL.NAMREPLY,
			params: conn.nick + ' ' +
				'= ' +
				chan_name,
		};

		var trailer = '';
		userList.forEach(function(datum) {
			if (!trailer) {
				trailer = datum;
			} else {
				trailer += ' ' + datum;
			}

			if (trailer.length > 350) {
				msg = {
					prefix: msgTemp.prefix,
					command: msgTemp.command,
					params: msgTemp.params,
					trailer: trailer,
				};
				conn.send(msg);

				trailer = '';
			}
		});
		if (trailer) {
			msg = {
				prefix: msgTemp.prefix,
				command: msgTemp.command,
				params: msgTemp.params,
				trailer: trailer,
			};
			conn.send(msg);
		}

		msg = IrcReplies.RPL_ENDOFNAMES(conn.nick, chan_name);
		this.reply(conn, msg);
	};

	Server.prototype.connList = function(info) {
		var conn = info.conn;
		if (!conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

		var list = this.chanmgr.getList();
		var us = this;
		list.forEach(function(msg) {
			us.reply(conn, msg);
		});

		var msg = IrcReplies.RPL_LISTEND();
		this.reply(conn, msg);
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
		if (this.connmgr.get(nick)) {
			var msg = IrcReplies.ERR_NICKNAMEINUSE(nick);
			this.reply(conn, msg);
			return;
		}

		this.connmgr.setNick(conn, nick);
	};

	// TODO: support more than one channel per command
	Server.prototype.connPart = function(info) {
		var conn = info.conn;
		if (!conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

		var chan_name = info.message.irc_params;

		var chan = this.chanmgr.get(chan_name);
		if (!chan) {
			var msg = IrcReplies.ERR_NOSUCHCHANNEL(chan_name);
			this.reply(conn, msg);
			return;
		}

		var chanUser = chan.get(conn.nick);
		if (!chanUser) {
			var msg = IrcReplies.ERR_NOTONCHANNEL(chan_name);
			this.reply(conn, msg);
			return;
		}

		var msg = {
			prefix: composeUserStr(conn),
			command: 'PART',
			params: chan_name,
			trailer: info.message.irc_trailer,
		};

		chan.send(msg);

		var empty = chan.delete(conn.nick);
		if (empty)
			this.chanmgr.delete(chan_name);
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

	Server.prototype.connPrivMsgChan = function(info) {
		var conn = info.conn;
		var chanName = info.message.irc_params;
		var text = info.message.irc_trailer;

		var chan = this.chanmgr.get(chanName);
		if (!chan) {
			var msg = IrcReplies.ERR_NOSUCHCHANNEL(chanName);
			this.reply(conn, msg);
			return;
		}

		if (!chan.hasUser(conn.nick)) {
			var msg = IrcReplies.ERR_CANNOTSENDTOCHAN(chanName);
			this.reply(conn, msg);
			return;
		}

		var msg = {
			prefix: composeUserStr(conn),
			command: 'PRIVMSG',
			params: chanName,
			trailer: text,
		};

		chan.send(msg, conn.nick);
	};

	Server.prototype.connPrivMsgUser = function(info) {
		var conn = info.conn;
		var target = info.message.irc_params;
		var text = info.message.irc_trailer;

		var remote = this.connmgr.get(target);
		if (!remote) {
			msg = IrcReplies.ERR_NOSUCHNICK(target);
			this.reply(conn, msg);
			return;
		}

		var msg = {
			prefix: composeUserStr(conn),
			command: 'PRIVMSG',
			params: target,
			trailer: text,
		};

		remote.send(msg);
	};

	Server.prototype.connPrivMsg = function(info) {
		if (!info.conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

		var target = info.message.irc_params;
		if (validate.channel(target))
			this.connPrivMsgChan(info);
		else
			this.connPrivMsgUser(info);
	};

	Server.prototype.connQuit = function(info) {
		var trailer = info.message.irc_trailer || 'Client Quit';
		var msg = {
			prefix: undefined,
			command: 'QUIT',
			params: undefined,
			trailer: trailer,
		};
		replyUser(info.conn, msg);

		this.connEnd(info, msg);
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

		this.connmgr.setUser(conn, username);
		conn.user_host = user[2];
		conn.user_realname = user[3];

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

		conn.active = true;
	};

	Server.prototype.connWho = function(info) {
		var conn = info.conn;
		var chanName = info.message.irc_params;

		if (!conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

		if (!validate.channel(chanName)) {
			var msg = IrcReplies.ERR_BADCHANMASK(chanName);
			this.reply(conn, msg);
			return;
		}

		var chan = this.chanmgr.get(chanName);
		if (!chan) {
			var msg = IrcReplies.ERR_NOSUCHCHANNEL(chanName);
			this.reply(conn, msg);
			return;
		}

		var msgs = chan.whoList(conn.nick, this.hostname);
		var us = this;
		msgs.forEach(function(msg) {
			us.reply(conn, msg);
		});

		var msg = IrcReplies.RPL_ENDOFWHO(conn.nick, chanName);
		this.reply(conn, msg);
	};

	Server.prototype.connWhoisUser = function(conn, mask) {
		var msg = undefined;

		// TODO: exact match is incorrect. must match mask.
		var connUser = this.connmgr.get(mask);
		if (!connUser) {
			msg = IrcReplies.ERR_NOSUCHNICK(mask);
			this.reply(conn, msg);
			return;
		}

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
		if (!conn.active) {
			var msg = IrcReplies.ERR_NOTREGISTERED();
			this.reply(conn, msg);
			return;
		}

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
		this.connmgr.add(conn);

		var us = this;
		// conn.on('message', function(info) { us.connMessage(info); });
		conn.on('end', function(info) { us.connEnd(info); });
		conn.on('JOIN', function(info) { us.connJoin(info); });
		conn.on('LIST', function(info) { us.connList(info); });
		conn.on('NICK', function(info) { us.connNick(info); });
		conn.on('PART', function(info) { us.connPart(info); });
		conn.on('PING', function(info) { us.connPing(info); });
		conn.on('PRIVMSG', function(info) { us.connPrivMsg(info); });
		conn.on('QUIT', function(info) { us.connQuit(info); });
		conn.on('USER', function(info) { us.connUser(info); });
		conn.on('WHO', function(info) { us.connWho(info); });
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

