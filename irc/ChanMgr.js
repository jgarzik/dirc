require('classtool');

function ClassSpec(b) {
	var IrcReplies = require('./replies');

	function ChanMgr(cfg) {
		ChanMgr.super(this, arguments);

		this.channels = {};
	};
	ChanMgr.superclass = b.superclass || require('events').EventEmitter;

	ChanMgr.prototype.delete = function(chanName) {
		delete this.channels[chanName];
	};

	ChanMgr.prototype.add = function(chan) {
		this.channels[chan.name] = chan;
	};

	ChanMgr.prototype.get = function(channelName) {
		return this.channels[channelName];
	};

	ChanMgr.prototype.getList = function() {
		var res = [];
		for (var chanName in this.channels) {
			var chan = this.channels[chanName];
			var msg = IrcReplies.RPL_LIST(chanName, 
						      chan.nUsers(),
						      chan.topic);
			res.push(msg);
		};

		return res;
	};

	return ChanMgr;
};
module.defineClass(ClassSpec);

