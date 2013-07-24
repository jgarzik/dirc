require('classtool');

function ClassSpec(b) {
	function IRCConn(cfg) {
		IRCConn.super(this, arguments);
		this.partial = '';
		this.sock = cfg.socket;
		this.remoteAddress = this.sock.remoteAddress;
	};
	IRCConn.superclass = b.superclass || require('events').EventEmitter;

	IRCConn.prototype.sockData = function(dataIn) {
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

			var msg = {
				prefix: res[2],
				command: res[3],
				params: res[5],
				trailer: res[7],
			};

			// emit message
			this.emit('message', {
				conn: this,
				socket: this.sock,
				message: msg,
			});
		}
	};

	IRCConn.prototype.sockEnd = function() {
		this.emit('end', {
			conn: this,
			socket: this.sock,
		});

		this.sock = undefined;
	};

	IRCConn.prototype.start = function() {
		var us = this;
		this.sock.on('data', function(dataIn) {
			us.sockData(dataIn);
		});
		this.sock.on('end', function() {
			us.sockEnd();
		});
	};

	IRCConn.prototype.send = function(msg) {
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

	return IRCConn;
};
module.defineClass(ClassSpec);

