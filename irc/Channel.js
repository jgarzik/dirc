require('classtool');

function ClassSpec(b) {
	function Channel(cfg) {
		Channel.super(this, arguments);

		if (typeof cfg !== 'object')
			cfg = {};
		this.name = cfg.chan_name;
		this.topic = '';
		this.users = {};
	};
	Channel.superclass = b.superclass || require('events').EventEmitter;

	Channel.prototype.get = function(nick) {
		return this.users[nick];
	};

	Channel.prototype.add = function(user) {
		var conn = user.conn;
		this.users[conn.nick] = user;
		conn.channels[this.name] = true;
	};

	Channel.prototype.delete = function(nick) {
		if (!(nick in this.users))
			return;

		var user = this.users[nick];
		delete this.users[nick];

		var conn = user.conn;
		delete conn.channels[this.name];

		return (Object.keys(this.users).length == 0); // channel empty?
	};

	Channel.prototype.send = function(msg, skipNick) {
		for (var nick in this.users) {
			if (skipNick && (nick == skipNick))
				continue;

			user = this.users[nick];
			user.conn.send(msg);
		}
	};

	Channel.prototype.hasUser = function(nick) {
		return (nick in this.users);
	};

	Channel.prototype.nUsers = function() {
		return Object.keys(this.users).length;
	};

	Channel.prototype.userList = function() {
		var res = [];
		for (var nick in this.users) {
			user = this.users[nick];
			var s = nick;
			if ('op' in user.flags)
				s = '@' + s;
			res.push(s);
		}

		return res;
	}

	return Channel;
};
module.defineClass(ClassSpec);

