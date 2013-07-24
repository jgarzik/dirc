require('classtool');

function ClassSpec(b) {
	function Conn(cfg) {
		Conn.super(this, arguments);
		this.partial = '';
		this.sock = cfg.socket;
		this.remoteAddress = this.sock.remoteAddress;
	};
	Conn.superclass = b.superclass || require('events').EventEmitter;

	function me_user(msg) {
		msg.user = msg.irc_params.split(' ');
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
			line += ':' + prefix + ' ';
		line += msg.command;
		if (msg.params)
			line += ' ' + params;
		if (msg.trailer)
			line += ' :' + trailer;
		line += "\r\n";

		this.sock.write(line, 'binary');
	};

	return Conn;
};
module.defineClass(ClassSpec);

