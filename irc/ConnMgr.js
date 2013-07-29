require('classtool');

function ClassSpec(b) {
	function ConnMgr(cfg) {
		ConnMgr.super(this, arguments);
		this.cli = [];
		this.cli_by_nick = {};
		this.cli_by_user = {};
	};
	ConnMgr.superclass = b.superclass || require('events').EventEmitter;

	ConnMgr.prototype.delete = function(conn) {
		conn.stop();

		for (var i = 0; i < this.cli.length; i++) {
			if (this.cli[i] == conn) {
				this.cli.splice(i, 1);
				break;
			}
		}

		if (conn.nick)
			delete this.cli_by_nick[conn.nick];
		if (conn.user)
			delete this.cli_by_user[conn.user];
	};

	ConnMgr.prototype.add = function(conn) {
		this.cli.push(conn);
	};

	ConnMgr.prototype.get = function(nick) {
		return this.cli[nick];
	};

	ConnMgr.prototype.setNick = function(conn, nick) {
		if (conn.nick)
			delete this.cli_by_nick[conn.nick];

		conn.nick = nick;
		this.cli_by_nick[nick] = conn;
	};

	ConnMgr.prototype.setUser = function(conn, user) {
		if (conn.user)
			delete this.cli_by_user[conn.user];

		conn.user = user;
		this.cli_by_user[user] = conn;
	};

	ConnMgr.prototype.sendCommonChan = function(connRemote, msg) {
		this.cli.forEach(function(conn) {
			if (conn.active &&
			    (conn != connRemote) &&
			    conn.commonChan(connRemote))
				conn.send(msg);
		});
	};

	return ConnMgr;
};
module.defineClass(ClassSpec);

