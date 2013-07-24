require('classtool');

function ClassSpec(b) {
	var net = require('net');
	var Conn = require('./Conn').class();

	function Server(cfg) {
		if (typeof cfg !== 'object')
			cfg = {};
		this.port = cfg.port || 12667;
		this.srv = undefined;
		this.clients = [];
	};

	Server.prototype.connEnd = function(info) {
		var addr = info.conn.remoteAddress;
		var conn = info.conn;
		for (var i = 0; i < this.clients.length; i++) {
			if (this.clients[i] == conn) {
				this.clients.splice(i, 1);
				break;
			}
		}

		console.log('Disconnected', addr);
	};

	Server.prototype.connMessage = function(info) {
		console.log(info.socket.remoteAddress, ":", info.message);
	};

	Server.prototype.connNew = function(connSocket) {
		console.log("Connected", connSocket.remoteAddress);
		var conn = new Conn({
			srv: this,
			socket: connSocket,
		});
		this.clients.push(conn);

		var us = this;
		conn.on('message', function(info) {
			us.connMessage(info);
		});
		conn.on('end', function(info) {
			us.connEnd(info);
		});

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

