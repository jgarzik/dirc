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
		this.users[user.conn.nick] = user;
	};

	Channel.prototype.delete = function(nick) {
		delete this.users[nick];
	};

	Channel.prototype.send = function(msg) {
		for (var nick in this.users) {
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

	return Channel;
};
module.defineClass(ClassSpec);

