
exports.nick = function(nick) {
	var re = /^[a-z_\-\[\]\\^{}|`][a-z0-9_\-\[\]\\^{}|`]{2,15}$/i;
	return nick.match(re);
};

exports.channel = function(channel) {
	var re = new RegExp("^[&|#][^, "+String.fromCharCode(7)+"]+$", "i");
	return channel.match(re);
};

exports.user = function(user) {
	var re = /^[^\s@]+$/;
	return user.match(re);
};

