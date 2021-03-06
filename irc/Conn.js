require('classtool');

function ClassSpec(b) {
	var RPL = require('./RPL');

	function Conn(cfg) {
		Conn.super(this, arguments);
		this.partial = '';
		this.srv = cfg.srv;
		this.sock = cfg.socket;
		this.trace = cfg.trace || {};
		this.remoteAddress = this.sock.remoteAddress;

		// optionally set by owner
		this.user = undefined;
		this.user_host = undefined;
		this.user_realname = undefined;
		this.nick = undefined;
		this.channels = {};
		this.active = false;
	};
	Conn.superclass = b.superclass || require('events').EventEmitter;

	function me_mode(msg) {
		var v = msg.irc_params.split(' ');
		if (v.length < 2)
			return;

		var nick = v[0];
		v.splice(0, 1);

		var modes = v.join(' ');

		msg.mode = {
			nick: nick,
			modes: modes,
		};
	}

	function me_nick(msg) {
		msg.nick = msg.irc_params;
	}

	function me_pass(msg) {
		msg.pass = msg.irc_params;
	}

	function me_topic(msg) {
		msg.topic = {
			channel: msg.irc_params,
			newTopic: msg.irc_trailer,
		};
	}

	function me_user(msg) {
		msg.user = msg.irc_params.split(' ');
		msg.user.push(msg.irc_trailer);
	}

	function me_whois(msg) {
		var params = msg.irc_params.split(' ');
		var target = params[0];
		var maskstr = params[1];
		if (!maskstr) {
			target = undefined;
			maskstr = params[0];
		}
		var masks = maskstr.split(',');
		msg.whois = {
			target: target,
			masks: masks,
		};
	}

	function msgExpand(msg) {
		switch (msg.irc_command) {
		case 'MODE': me_mode(msg); break;
		case 'NICK': me_nick(msg); break;
		case 'PASS': me_pass(msg); break;
		case 'TOPIC': me_topic(msg); break;
		case 'USER': me_user(msg); break;
		case 'WHOIS': me_whois(msg); break;
		default:
			// do nothing
			break;
		}
	}

	function logLines(dataIn) {
		dataIn = dataIn.replace(/\s\s*$/, '');
		var lines = dataIn.split("\n");
		lines.forEach(function(line) {
			console.log("C> " + line.replace(/\s\s*$/, ''));
		});
	};

	Conn.prototype.sockData = function(dataIn) {
		dataIn = String(dataIn);

		if (this.trace.netRead)
			logLines(dataIn);

		// append to existing buffer
		this.partial += dataIn;

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

			var command = res[3].toUpperCase();
			var msg = {
				irc_line: line,
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

			// general message tap
			this.emit('message', emitArgs);

			// emit message based on IRC command
			this.emit(command, emitArgs);
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

		if (this.trace.netWrite)
			console.log('<S ' + line.replace(/\s\s*$/, ''));

		this.sock.write(line, 'binary');
	};

	Conn.prototype.stop = function() {
		if (!this.sock)
			return;

		this.sock.destroy();
		this.sock = undefined;
	};

	Conn.prototype.commonChan = function(connRemote) {
		for (var chanName in connRemote.channels)
			if (chanName in this.channels)
				return true;

		return false;
	}

	return Conn;
};
module.defineClass(ClassSpec);

