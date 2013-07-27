require('classtool');

function ClassSpec(b) {
	function ChanUser(cfg) {
		ChanUser.super(this, arguments);

		if (typeof cfg !== 'object')
			cfg = {};

		this.conn = cfg.conn;
		this.flags = cfg.flags || {};
	};
	ChanUser.superclass = b.superclass || require('events').EventEmitter;

	return ChanUser;
};
module.defineClass(ClassSpec);

