require('classtool');

function ClassSpec(b) {
	function IRCConn(cfg) {
		IRCConn.super(this, arguments);
		this.partial = '';
		this.sock = cfg.socket;
	};
	IRCConn.superclass = b.superclass || require('events').EventEmitter;

	IRCConn.prototype.sockData = function(dataIn) {
		// append to existing buffer
		this.partial += String(dataIn);

		// if overlength, fail
		if (this.partial.length > 512) {
			this.sockEnd();
			return;
		}

		// match one line
		var re = /^([^\r\n]+)\r\n(.*)$/;
		var res = re.exec(this.partial);
		if (!res)
			return;

		var line = res[1];
		this.partial = res[2];

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

