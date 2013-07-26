require('classtool');

function ClassSpec(b) {
	var RPL = require('./RPL');

	function Conn(cfg) {
		Conn.super(this, arguments);
		this.partial = '';
		this.srv = cfg.srv;
		this.sock = cfg.socket;
		this.remoteAddress = this.sock.remoteAddress;

		// optionally set by owner
		this.user = undefined;
		this.user_host = undefined;
		this.user_realname = undefined;
		this.nick = undefined;
	};
	Conn.superclass = b.superclass || require('events').EventEmitter;

	function me_user(msg) {
		msg.user = msg.irc_params.split(' ');
		msg.user.push(msg.irc_trailer);
	}

	function me_pass(msg) {
		msg.pass = msg.irc_params;
	}

	function me_nick(msg) {
		msg.nick = msg.irc_params;
	}

	function msgExpand(msg) {
		switch (msg.irc_command) {
		case 'USER': me_user(msg); break;
		case 'PASS': me_pass(msg); break;
		case 'NICK': me_nick(msg); break;
		default:
			// do nothing
			break;
		}
	}

	Conn.prototype.sockData = function(dataIn) {
		// append to existing buffer
		this.partial += String(dataIn);

		while (1) {
			var skip = 0;
			var nl = this.partial.indexOf("\n");
			if (nl < 0) {
				if (this.partial.length > 512)
					this.sockEnd();
				return;
			}
			if ((nl > 0) && (this.partial[nl - 1] == "\r"))
				skip = 1;

			var line = this.partial.slice(0, nl - skip);
			this.partial = this.partial.slice(nl + 1);

			// if overlength, fail
			if (line.length > 511) {
				this.sockEnd();
				return;
			}

			// parse IRC protocol message
			var reIRC = /^(:(\S+) )?(\S+)( (?!:)(.+?))?( :(.+))?$/;
			res = reIRC.exec(line);
			if (!res) {
				this.sockEnd();
				return;
			}

			var command = res[3];
			var msg = {
				irc_prefix: res[2],
				irc_command: command,
				irc_params: res[5],
				irc_trailer: res[7],
			};

			// additional message-specific parsing
			msgExpand(msg);

			var emitArgs = {
				conn: this,
				socket: this.sock,
				message: msg,
			};

			// emit message based on IRC command
			this.emit(command, emitArgs);

			// general message tap
			this.emit('message', emitArgs);
		}
	};

	Conn.prototype.sockEnd = function() {
		this.emit('end', {
			conn: this,
			socket: this.sock,
		});

		this.sock = undefined;
	};

	Conn.prototype.start = function() {
		var us = this;
		this.sock.on('data', function(dataIn) {
			us.sockData(dataIn);
		});
		this.sock.on('end', function() {
			us.sockEnd();
		});
	};

	Conn.prototype.send = function(msg) {
		line = '';
		if (msg.prefix)
			line += ':' + msg.prefix + ' ';
		line += msg.command;
		if (msg.params)
			line += ' ' + msg.params;
		if (msg.trailer)
			line += ' :' + msg.trailer;
		line += "\r\n";

		this.sock.write(line, 'binary');
	};

	Conn.prototype.rplWelcome = function() {
		var msg = {
			prefix: this.srv.hostname,
			command: RPL.WELCOME,
			params: this.nick,
			trailer: "Welcome to the Internet Relay Network <" +
				this.nick + ">!<" + this.user + ">@<" +
				this.user_host + ">",
		};
		this.send(msg);
	};

	Conn.prototype.rplYourHost = function() {
		var msg = {
			prefix: this.srv.hostname,
			command: RPL.YOURHOST,
			params: this.nick,
			trailer: "Your host is " + this.srv.hostname +
				", running version " + this.srv.version,
		};
		this.send(msg);
	};

	Conn.prototype.rplCreated = function() {
		var msg = {
			prefix: this.srv.hostname,
			command: RPL.CREATED,
			params: this.nick,
			trailer: "This server was created " +
				this.srv.ctime.toISOString(),
		};
		this.send(msg);
	};

	Conn.prototype.rplMyInfo = function() {
		var msg = {
			prefix: this.srv.hostname,
			command: RPL.MYINFO,
			params: this.nick,
			trailer: this.srv.hostname + " " +
				 this.srv.version + " " +
				 "umodes " +
				 "chanmodes",
		};
		this.send(msg);
	};

	return Conn;
};
module.defineClass(ClassSpec);

