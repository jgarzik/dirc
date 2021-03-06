// Auto-generated file

var ERR = require('./ERR');
var RPL = require('./RPL');



// RPL_WELCOME "<nick> :Welcome to the Internet Relay Network <nick>"
exports.RPL_WELCOME = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "Welcome to the Internet Relay Network <nick>";
	re = new RegExp("<nick>", "g");
	f_trailer = f_trailer.replace(re, r_nick);

	return {
		prefix: undefined,
		command: RPL.WELCOME,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_YOURHOST "<nick> :Your host is <servername>, running version <ver>"
exports.RPL_YOURHOST = function(r_nick, r_servername, r_ver) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "Your host is <servername>, running version <ver>";
	re = new RegExp("<servername>", "g");
	f_trailer = f_trailer.replace(re, r_servername);
	re = new RegExp("<ver>", "g");
	f_trailer = f_trailer.replace(re, r_ver);

	return {
		prefix: undefined,
		command: RPL.YOURHOST,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_CREATED "<nick> :This server was created <date>"
exports.RPL_CREATED = function(r_nick, r_date) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "This server was created <date>";
	re = new RegExp("<date>", "g");
	f_trailer = f_trailer.replace(re, r_date);

	return {
		prefix: undefined,
		command: RPL.CREATED,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_MYINFO "<nick> <servername> <version> <available user modes> <available channel modes> :" 
exports.RPL_MYINFO = function(r_nick, r_servername, r_version, r_available_user_modes, r_available_channel_modes) {

	var re = undefined;

	var f_param = "<nick> <servername> <version> <available user modes> <available channel modes>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<servername>", "g");
	f_param = f_param.replace(re, r_servername);
	re = new RegExp("<version>", "g");
	f_param = f_param.replace(re, r_version);
	re = new RegExp("<available user modes>", "g");
	f_param = f_param.replace(re, r_available_user_modes);
	re = new RegExp("<available channel modes>", "g");
	f_param = f_param.replace(re, r_available_channel_modes);

	return {
		prefix: undefined,
		command: RPL.MYINFO,
		params: f_param,
		trailer: undefined,
	};
};

// RPL_ISUPPORT "<nick> <keyvalue_list> :are supported by this server"
exports.RPL_ISUPPORT = function(r_nick, r_keyvalue_list) {

	var re = undefined;

	var f_param = "<nick> <keyvalue_list>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<keyvalue_list>", "g");
	f_param = f_param.replace(re, r_keyvalue_list);

	var f_trailer = "are supported by this server";

	return {
		prefix: undefined,
		command: RPL.ISUPPORT,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_AWAY "<nick> :<away message>"
exports.RPL_AWAY = function(r_nick, r_away_message) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "<away message>";
	re = new RegExp("<away message>", "g");
	f_trailer = f_trailer.replace(re, r_away_message);

	return {
		prefix: undefined,
		command: RPL.AWAY,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_UNAWAY ":You are no longer marked as being away"
exports.RPL_UNAWAY = function() {

	var re = undefined;

	var f_trailer = "You are no longer marked as being away";

	return {
		prefix: undefined,
		command: RPL.UNAWAY,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_NOWAWAY ":You have been marked as being away" 
exports.RPL_NOWAWAY = function() {

	var re = undefined;

	var f_trailer = "You have been marked as being away";

	return {
		prefix: undefined,
		command: RPL.NOWAWAY,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_WHOISUSER "<nick> <user> <host> * :<real name>"
exports.RPL_WHOISUSER = function(r_nick, r_user, r_host, r_real_name) {

	var re = undefined;

	var f_param = "<nick> <user> <host> *";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);
	re = new RegExp("<host>", "g");
	f_param = f_param.replace(re, r_host);

	var f_trailer = "<real name>";
	re = new RegExp("<real name>", "g");
	f_trailer = f_trailer.replace(re, r_real_name);

	return {
		prefix: undefined,
		command: RPL.WHOISUSER,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_WHOISSERVER "<nick> <server> :<server info>"
exports.RPL_WHOISSERVER = function(r_nick, r_server, r_server_info) {

	var re = undefined;

	var f_param = "<nick> <server>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "<server info>";
	re = new RegExp("<server info>", "g");
	f_trailer = f_trailer.replace(re, r_server_info);

	return {
		prefix: undefined,
		command: RPL.WHOISSERVER,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_WHOISOPERATOR "<nick> :is an IRC operator" 
exports.RPL_WHOISOPERATOR = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "is an IRC operator";

	return {
		prefix: undefined,
		command: RPL.WHOISOPERATOR,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_WHOISIDLE "<nick> <integer> :seconds idle"
exports.RPL_WHOISIDLE = function(r_nick, r_integer) {

	var re = undefined;

	var f_param = "<nick> <integer>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<integer>", "g");
	f_param = f_param.replace(re, r_integer);

	var f_trailer = "seconds idle";

	return {
		prefix: undefined,
		command: RPL.WHOISIDLE,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFWHOIS "<nick> :End of WHOIS list"
exports.RPL_ENDOFWHOIS = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "End of WHOIS list";

	return {
		prefix: undefined,
		command: RPL.ENDOFWHOIS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_WHOWASUSER "<nick> <user> <host> * :<real name>"
exports.RPL_WHOWASUSER = function(r_nick, r_user, r_host, r_real_name) {

	var re = undefined;

	var f_param = "<nick> <user> <host> *";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);
	re = new RegExp("<host>", "g");
	f_param = f_param.replace(re, r_host);

	var f_trailer = "<real name>";
	re = new RegExp("<real name>", "g");
	f_trailer = f_trailer.replace(re, r_real_name);

	return {
		prefix: undefined,
		command: RPL.WHOWASUSER,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFWHOWAS "<nick> :End of WHOWAS"
exports.RPL_ENDOFWHOWAS = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "End of WHOWAS";

	return {
		prefix: undefined,
		command: RPL.ENDOFWHOWAS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LIST "<channel> <# visible> :<topic>"
exports.RPL_LIST = function(r_channel, r_n_visible, r_topic) {

	var re = undefined;

	var f_param = "<channel> <# visible>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);
	re = new RegExp("<# visible>", "g");
	f_param = f_param.replace(re, r_n_visible);

	var f_trailer = "<topic>";
	re = new RegExp("<topic>", "g");
	f_trailer = f_trailer.replace(re, r_topic);

	return {
		prefix: undefined,
		command: RPL.LIST,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LISTEND ":End of LIST" 
exports.RPL_LISTEND = function() {

	var re = undefined;

	var f_trailer = "End of LIST";

	return {
		prefix: undefined,
		command: RPL.LISTEND,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_UNIQOPIS "<channel> <nickname>"
exports.RPL_UNIQOPIS = function(r_channel, r_nickname) {

	var re = undefined;

	var f_trailer = "<channel> <nickname>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<nickname>", "g");
	f_trailer = f_trailer.replace(re, r_nickname);

	return {
		prefix: undefined,
		command: RPL.UNIQOPIS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_CHANNELMODEIS "<channel> <mode> <mode params>"
exports.RPL_CHANNELMODEIS = function(r_channel, r_mode, r_mode_params) {

	var re = undefined;

	var f_trailer = "<channel> <mode> <mode params>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<mode>", "g");
	f_trailer = f_trailer.replace(re, r_mode);
	re = new RegExp("<mode params>", "g");
	f_trailer = f_trailer.replace(re, r_mode_params);

	return {
		prefix: undefined,
		command: RPL.CHANNELMODEIS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_NOTOPIC "<nick> <channel> :No topic is set"
exports.RPL_NOTOPIC = function(r_nick, r_channel) {

	var re = undefined;

	var f_param = "<nick> <channel>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "No topic is set";

	return {
		prefix: undefined,
		command: RPL.NOTOPIC,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_TOPIC "<channel> :<topic>"
exports.RPL_TOPIC = function(r_channel, r_topic) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "<topic>";
	re = new RegExp("<topic>", "g");
	f_trailer = f_trailer.replace(re, r_topic);

	return {
		prefix: undefined,
		command: RPL.TOPIC,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_INVITING "<channel> <nick>"
exports.RPL_INVITING = function(r_channel, r_nick) {

	var re = undefined;

	var f_trailer = "<channel> <nick>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<nick>", "g");
	f_trailer = f_trailer.replace(re, r_nick);

	return {
		prefix: undefined,
		command: RPL.INVITING,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_SUMMONING "<user> :Summoning user to IRC"
exports.RPL_SUMMONING = function(r_user) {

	var re = undefined;

	var f_param = "<user>";
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);

	var f_trailer = "Summoning user to IRC";

	return {
		prefix: undefined,
		command: RPL.SUMMONING,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_INVITELIST "<channel> <invitemask>"
exports.RPL_INVITELIST = function(r_channel, r_invitemask) {

	var re = undefined;

	var f_trailer = "<channel> <invitemask>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<invitemask>", "g");
	f_trailer = f_trailer.replace(re, r_invitemask);

	return {
		prefix: undefined,
		command: RPL.INVITELIST,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFINVITELIST "<channel> :End of channel invite list"
exports.RPL_ENDOFINVITELIST = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "End of channel invite list";

	return {
		prefix: undefined,
		command: RPL.ENDOFINVITELIST,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_EXCEPTLIST "<channel> <exceptionmask>"
exports.RPL_EXCEPTLIST = function(r_channel, r_exceptionmask) {

	var re = undefined;

	var f_trailer = "<channel> <exceptionmask>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<exceptionmask>", "g");
	f_trailer = f_trailer.replace(re, r_exceptionmask);

	return {
		prefix: undefined,
		command: RPL.EXCEPTLIST,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFEXCEPTLIST "<channel> :End of channel exception list" 
exports.RPL_ENDOFEXCEPTLIST = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "End of channel exception list";

	return {
		prefix: undefined,
		command: RPL.ENDOFEXCEPTLIST,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_VERSION "<version>.<debuglevel> <server> :<comments>" 
exports.RPL_VERSION = function(r_version, r_debuglevel, r_server, r_comments) {

	var re = undefined;

	var f_param = "<version>.<debuglevel> <server>";
	re = new RegExp("<version>", "g");
	f_param = f_param.replace(re, r_version);
	re = new RegExp("<debuglevel>", "g");
	f_param = f_param.replace(re, r_debuglevel);
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "<comments>";
	re = new RegExp("<comments>", "g");
	f_trailer = f_trailer.replace(re, r_comments);

	return {
		prefix: undefined,
		command: RPL.VERSION,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_WHOREPLY "<mynick> <channel> <user> <host> <server> <nick> <flags> :<hopcount> <real name>"
exports.RPL_WHOREPLY = function(r_mynick, r_channel, r_user, r_host, r_server, r_nick, r_flags, r_hopcount, r_real_name) {

	var re = undefined;

	var f_param = "<mynick> <channel> <user> <host> <server> <nick> <flags>";
	re = new RegExp("<mynick>", "g");
	f_param = f_param.replace(re, r_mynick);
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);
	re = new RegExp("<host>", "g");
	f_param = f_param.replace(re, r_host);
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<flags>", "g");
	f_param = f_param.replace(re, r_flags);

	var f_trailer = "<hopcount> <real name>";
	re = new RegExp("<hopcount>", "g");
	f_trailer = f_trailer.replace(re, r_hopcount);
	re = new RegExp("<real name>", "g");
	f_trailer = f_trailer.replace(re, r_real_name);

	return {
		prefix: undefined,
		command: RPL.WHOREPLY,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFWHO "<nick> <name> :End of WHO list" 
exports.RPL_ENDOFWHO = function(r_nick, r_name) {

	var re = undefined;

	var f_param = "<nick> <name>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<name>", "g");
	f_param = f_param.replace(re, r_name);

	var f_trailer = "End of WHO list";

	return {
		prefix: undefined,
		command: RPL.ENDOFWHO,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFNAMES "<nick> <channel> :End of NAMES list"
exports.RPL_ENDOFNAMES = function(r_nick, r_channel) {

	var re = undefined;

	var f_param = "<nick> <channel>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "End of NAMES list";

	return {
		prefix: undefined,
		command: RPL.ENDOFNAMES,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LINKS "<mask> <server> :<hopcount> <server info>"
exports.RPL_LINKS = function(r_mask, r_server, r_hopcount, r_server_info) {

	var re = undefined;

	var f_param = "<mask> <server>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "<hopcount> <server info>";
	re = new RegExp("<hopcount>", "g");
	f_trailer = f_trailer.replace(re, r_hopcount);
	re = new RegExp("<server info>", "g");
	f_trailer = f_trailer.replace(re, r_server_info);

	return {
		prefix: undefined,
		command: RPL.LINKS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFLINKS "<mask> :End of LINKS list"
exports.RPL_ENDOFLINKS = function(r_mask) {

	var re = undefined;

	var f_param = "<mask>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);

	var f_trailer = "End of LINKS list";

	return {
		prefix: undefined,
		command: RPL.ENDOFLINKS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_BANLIST "<channel> <banmask>"
exports.RPL_BANLIST = function(r_channel, r_banmask) {

	var re = undefined;

	var f_trailer = "<channel> <banmask>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);
	re = new RegExp("<banmask>", "g");
	f_trailer = f_trailer.replace(re, r_banmask);

	return {
		prefix: undefined,
		command: RPL.BANLIST,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFBANLIST "<channel> :End of channel ban list"
exports.RPL_ENDOFBANLIST = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "End of channel ban list";

	return {
		prefix: undefined,
		command: RPL.ENDOFBANLIST,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_INFO ":<string>"
exports.RPL_INFO = function(r_string) {

	var re = undefined;

	var f_trailer = "<string>";
	re = new RegExp("<string>", "g");
	f_trailer = f_trailer.replace(re, r_string);

	return {
		prefix: undefined,
		command: RPL.INFO,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFINFO ":End of INFO list"
exports.RPL_ENDOFINFO = function() {

	var re = undefined;

	var f_trailer = "End of INFO list";

	return {
		prefix: undefined,
		command: RPL.ENDOFINFO,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_MOTDSTART "<nick> :- <server> Message of the day - "
exports.RPL_MOTDSTART = function(r_nick, r_server) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "- <server> Message of the day - ";
	re = new RegExp("<server>", "g");
	f_trailer = f_trailer.replace(re, r_server);

	return {
		prefix: undefined,
		command: RPL.MOTDSTART,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_MOTD "<nick> :- <text>"
exports.RPL_MOTD = function(r_nick, r_text) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "- <text>";
	re = new RegExp("<text>", "g");
	f_trailer = f_trailer.replace(re, r_text);

	return {
		prefix: undefined,
		command: RPL.MOTD,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ENDOFMOTD "<nick> :End of MOTD command"
exports.RPL_ENDOFMOTD = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "End of MOTD command";

	return {
		prefix: undefined,
		command: RPL.ENDOFMOTD,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_YOUREOPER ":You are now an IRC operator"
exports.RPL_YOUREOPER = function() {

	var re = undefined;

	var f_trailer = "You are now an IRC operator";

	return {
		prefix: undefined,
		command: RPL.YOUREOPER,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_REHASHING "<config file> :Rehashing"
exports.RPL_REHASHING = function(r_config_file) {

	var re = undefined;

	var f_param = "<config file>";
	re = new RegExp("<config file>", "g");
	f_param = f_param.replace(re, r_config_file);

	var f_trailer = "Rehashing";

	return {
		prefix: undefined,
		command: RPL.REHASHING,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_YOURESERVICE "You are service <servicename>"
exports.RPL_YOURESERVICE = function(r_servicename) {

	var re = undefined;

	var f_trailer = "You are service <servicename>";
	re = new RegExp("<servicename>", "g");
	f_trailer = f_trailer.replace(re, r_servicename);

	return {
		prefix: undefined,
		command: RPL.YOURESERVICE,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TIME "<server> :<string showing server's local time>"
exports.RPL_TIME = function(r_server, r_string_showing_server_s_local_time) {

	var re = undefined;

	var f_param = "<server>";
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "<string showing server's local time>";
	re = new RegExp("<string showing server's local time>", "g");
	f_trailer = f_trailer.replace(re, r_string_showing_server_s_local_time);

	return {
		prefix: undefined,
		command: RPL.TIME,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_USERSSTART ":UserID   Terminal  Host"
exports.RPL_USERSSTART = function() {

	var re = undefined;

	var f_trailer = "UserID   Terminal  Host";

	return {
		prefix: undefined,
		command: RPL.USERSSTART,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_USERS ":<username> <ttyline> <hostname>"
exports.RPL_USERS = function(r_username, r_ttyline, r_hostname) {

	var re = undefined;

	var f_trailer = "<username> <ttyline> <hostname>";
	re = new RegExp("<username>", "g");
	f_trailer = f_trailer.replace(re, r_username);
	re = new RegExp("<ttyline>", "g");
	f_trailer = f_trailer.replace(re, r_ttyline);
	re = new RegExp("<hostname>", "g");
	f_trailer = f_trailer.replace(re, r_hostname);

	return {
		prefix: undefined,
		command: RPL.USERS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFUSERS ":End of users"
exports.RPL_ENDOFUSERS = function() {

	var re = undefined;

	var f_trailer = "End of users";

	return {
		prefix: undefined,
		command: RPL.ENDOFUSERS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_NOUSERS ":Nobody logged in"
exports.RPL_NOUSERS = function() {

	var re = undefined;

	var f_trailer = "Nobody logged in";

	return {
		prefix: undefined,
		command: RPL.NOUSERS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACELINK "Link <version & debug level> <destination> <next server> V<protocol version> <link uptime in seconds> <backstream sendq> <upstream sendq>"
exports.RPL_TRACELINK = function(r_version_debug_level, r_destination, r_next_server, r_protocol_version, r_link_uptime_in_seconds, r_backstream_sendq, r_upstream_sendq) {

	var re = undefined;

	var f_trailer = "Link <version & debug level> <destination> <next server> V<protocol version> <link uptime in seconds> <backstream sendq> <upstream sendq>";
	re = new RegExp("<version & debug level>", "g");
	f_trailer = f_trailer.replace(re, r_version_debug_level);
	re = new RegExp("<destination>", "g");
	f_trailer = f_trailer.replace(re, r_destination);
	re = new RegExp("<next server>", "g");
	f_trailer = f_trailer.replace(re, r_next_server);
	re = new RegExp("<protocol version>", "g");
	f_trailer = f_trailer.replace(re, r_protocol_version);
	re = new RegExp("<link uptime in seconds>", "g");
	f_trailer = f_trailer.replace(re, r_link_uptime_in_seconds);
	re = new RegExp("<backstream sendq>", "g");
	f_trailer = f_trailer.replace(re, r_backstream_sendq);
	re = new RegExp("<upstream sendq>", "g");
	f_trailer = f_trailer.replace(re, r_upstream_sendq);

	return {
		prefix: undefined,
		command: RPL.TRACELINK,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACECONNECTING "Try. <class> <server>"
exports.RPL_TRACECONNECTING = function(r_class, r_server) {

	var re = undefined;

	var f_trailer = "Try. <class> <server>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<server>", "g");
	f_trailer = f_trailer.replace(re, r_server);

	return {
		prefix: undefined,
		command: RPL.TRACECONNECTING,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACEHANDSHAKE "H.S. <class> <server>"
exports.RPL_TRACEHANDSHAKE = function(r_class, r_server) {

	var re = undefined;

	var f_trailer = "H.S. <class> <server>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<server>", "g");
	f_trailer = f_trailer.replace(re, r_server);

	return {
		prefix: undefined,
		command: RPL.TRACEHANDSHAKE,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACEUNKNOWN "???? <class> [<client IP address in dot form>]"
exports.RPL_TRACEUNKNOWN = function(r_class, r_client_IP_address_in_dot_form) {

	var re = undefined;

	var f_trailer = "???? <class> [<client IP address in dot form>]";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<client IP address in dot form>", "g");
	f_trailer = f_trailer.replace(re, r_client_IP_address_in_dot_form);

	return {
		prefix: undefined,
		command: RPL.TRACEUNKNOWN,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACEOPERATOR "Oper <class> <nick>"
exports.RPL_TRACEOPERATOR = function(r_class, r_nick) {

	var re = undefined;

	var f_trailer = "Oper <class> <nick>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<nick>", "g");
	f_trailer = f_trailer.replace(re, r_nick);

	return {
		prefix: undefined,
		command: RPL.TRACEOPERATOR,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACEUSER "User <class> <nick>"
exports.RPL_TRACEUSER = function(r_class, r_nick) {

	var re = undefined;

	var f_trailer = "User <class> <nick>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<nick>", "g");
	f_trailer = f_trailer.replace(re, r_nick);

	return {
		prefix: undefined,
		command: RPL.TRACEUSER,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACESERVER "Serv <class> <int>S <int>C <server> <thing>@<location> V<protocol version>"
exports.RPL_TRACESERVER = function(r_class, r_int, r_server, r_thing, r_location, r_protocol_version) {

	var re = undefined;

	var f_trailer = "Serv <class> <int>S <int>C <server> <thing>@<location> V<protocol version>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<int>", "g");
	f_trailer = f_trailer.replace(re, r_int);
	re = new RegExp("<server>", "g");
	f_trailer = f_trailer.replace(re, r_server);
	re = new RegExp("<thing>", "g");
	f_trailer = f_trailer.replace(re, r_thing);
	re = new RegExp("<location>", "g");
	f_trailer = f_trailer.replace(re, r_location);
	re = new RegExp("<protocol version>", "g");
	f_trailer = f_trailer.replace(re, r_protocol_version);

	return {
		prefix: undefined,
		command: RPL.TRACESERVER,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACESERVICE "Service <class> <name> <type> <active type>"
exports.RPL_TRACESERVICE = function(r_class, r_name, r_type, r_active_type) {

	var re = undefined;

	var f_trailer = "Service <class> <name> <type> <active type>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<name>", "g");
	f_trailer = f_trailer.replace(re, r_name);
	re = new RegExp("<type>", "g");
	f_trailer = f_trailer.replace(re, r_type);
	re = new RegExp("<active type>", "g");
	f_trailer = f_trailer.replace(re, r_active_type);

	return {
		prefix: undefined,
		command: RPL.TRACESERVICE,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACENEWTYPE "<newtype> 0 <client name>"
exports.RPL_TRACENEWTYPE = function(r_newtype, r_client_name) {

	var re = undefined;

	var f_trailer = "<newtype> 0 <client name>";
	re = new RegExp("<newtype>", "g");
	f_trailer = f_trailer.replace(re, r_newtype);
	re = new RegExp("<client name>", "g");
	f_trailer = f_trailer.replace(re, r_client_name);

	return {
		prefix: undefined,
		command: RPL.TRACENEWTYPE,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACECLASS "Class <class> <count>"
exports.RPL_TRACECLASS = function(r_class, r_count) {

	var re = undefined;

	var f_trailer = "Class <class> <count>";
	re = new RegExp("<class>", "g");
	f_trailer = f_trailer.replace(re, r_class);
	re = new RegExp("<count>", "g");
	f_trailer = f_trailer.replace(re, r_count);

	return {
		prefix: undefined,
		command: RPL.TRACECLASS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACELOG "File <logfile> <debug level>"
exports.RPL_TRACELOG = function(r_logfile, r_debug_level) {

	var re = undefined;

	var f_trailer = "File <logfile> <debug level>";
	re = new RegExp("<logfile>", "g");
	f_trailer = f_trailer.replace(re, r_logfile);
	re = new RegExp("<debug level>", "g");
	f_trailer = f_trailer.replace(re, r_debug_level);

	return {
		prefix: undefined,
		command: RPL.TRACELOG,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRACEEND "<server name> <version & debug level> :End of TRACE"
exports.RPL_TRACEEND = function(r_server_name, r_version_debug_level) {

	var re = undefined;

	var f_param = "<server name> <version & debug level>";
	re = new RegExp("<server name>", "g");
	f_param = f_param.replace(re, r_server_name);
	re = new RegExp("<version & debug level>", "g");
	f_param = f_param.replace(re, r_version_debug_level);

	var f_trailer = "End of TRACE";

	return {
		prefix: undefined,
		command: RPL.TRACEEND,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_STATSLINKINFO "<linkname> <sendq> <sent messages> <sent Kbytes> <received messages> <received Kbytes> <time open>"
exports.RPL_STATSLINKINFO = function(r_linkname, r_sendq, r_sent_messages, r_sent_Kbytes, r_received_messages, r_received_Kbytes, r_time_open) {

	var re = undefined;

	var f_trailer = "<linkname> <sendq> <sent messages> <sent Kbytes> <received messages> <received Kbytes> <time open>";
	re = new RegExp("<linkname>", "g");
	f_trailer = f_trailer.replace(re, r_linkname);
	re = new RegExp("<sendq>", "g");
	f_trailer = f_trailer.replace(re, r_sendq);
	re = new RegExp("<sent messages>", "g");
	f_trailer = f_trailer.replace(re, r_sent_messages);
	re = new RegExp("<sent Kbytes>", "g");
	f_trailer = f_trailer.replace(re, r_sent_Kbytes);
	re = new RegExp("<received messages>", "g");
	f_trailer = f_trailer.replace(re, r_received_messages);
	re = new RegExp("<received Kbytes>", "g");
	f_trailer = f_trailer.replace(re, r_received_Kbytes);
	re = new RegExp("<time open>", "g");
	f_trailer = f_trailer.replace(re, r_time_open);

	return {
		prefix: undefined,
		command: RPL.STATSLINKINFO,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_STATSCOMMANDS "<command> <count> <byte count> <remote count>"
exports.RPL_STATSCOMMANDS = function(r_command, r_count, r_byte_count, r_remote_count) {

	var re = undefined;

	var f_trailer = "<command> <count> <byte count> <remote count>";
	re = new RegExp("<command>", "g");
	f_trailer = f_trailer.replace(re, r_command);
	re = new RegExp("<count>", "g");
	f_trailer = f_trailer.replace(re, r_count);
	re = new RegExp("<byte count>", "g");
	f_trailer = f_trailer.replace(re, r_byte_count);
	re = new RegExp("<remote count>", "g");
	f_trailer = f_trailer.replace(re, r_remote_count);

	return {
		prefix: undefined,
		command: RPL.STATSCOMMANDS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ENDOFSTATS "<stats letter> :End of STATS report"
exports.RPL_ENDOFSTATS = function(r_stats_letter) {

	var re = undefined;

	var f_param = "<stats letter>";
	re = new RegExp("<stats letter>", "g");
	f_param = f_param.replace(re, r_stats_letter);

	var f_trailer = "End of STATS report";

	return {
		prefix: undefined,
		command: RPL.ENDOFSTATS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_STATSUPTIME ":Server Up %d days %d:%02d:%02d"
exports.RPL_STATSUPTIME = function() {

	var re = undefined;

	var f_trailer = "Server Up %d days %d:%02d:%02d";

	return {
		prefix: undefined,
		command: RPL.STATSUPTIME,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_STATSOLINE "O <hostmask> * <name>"
exports.RPL_STATSOLINE = function(r_hostmask, r_name) {

	var re = undefined;

	var f_trailer = "O <hostmask> * <name>";
	re = new RegExp("<hostmask>", "g");
	f_trailer = f_trailer.replace(re, r_hostmask);
	re = new RegExp("<name>", "g");
	f_trailer = f_trailer.replace(re, r_name);

	return {
		prefix: undefined,
		command: RPL.STATSOLINE,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_UMODEIS "<user mode string>"
exports.RPL_UMODEIS = function(r_user_mode_string) {

	var re = undefined;

	var f_trailer = "<user mode string>";
	re = new RegExp("<user mode string>", "g");
	f_trailer = f_trailer.replace(re, r_user_mode_string);

	return {
		prefix: undefined,
		command: RPL.UMODEIS,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_SERVLIST "<name> <server> <mask> <type> <hopcount> <info>" 
exports.RPL_SERVLIST = function(r_name, r_server, r_mask, r_type, r_hopcount, r_info) {

	var re = undefined;

	var f_trailer = "<name> <server> <mask> <type> <hopcount> <info>";
	re = new RegExp("<name>", "g");
	f_trailer = f_trailer.replace(re, r_name);
	re = new RegExp("<server>", "g");
	f_trailer = f_trailer.replace(re, r_server);
	re = new RegExp("<mask>", "g");
	f_trailer = f_trailer.replace(re, r_mask);
	re = new RegExp("<type>", "g");
	f_trailer = f_trailer.replace(re, r_type);
	re = new RegExp("<hopcount>", "g");
	f_trailer = f_trailer.replace(re, r_hopcount);
	re = new RegExp("<info>", "g");
	f_trailer = f_trailer.replace(re, r_info);

	return {
		prefix: undefined,
		command: RPL.SERVLIST,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_SERVLISTEND "<mask> <type> :End of service listing"
exports.RPL_SERVLISTEND = function(r_mask, r_type) {

	var re = undefined;

	var f_param = "<mask> <type>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);
	re = new RegExp("<type>", "g");
	f_param = f_param.replace(re, r_type);

	var f_trailer = "End of service listing";

	return {
		prefix: undefined,
		command: RPL.SERVLISTEND,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LUSERCLIENT "<nick> :There are <n_users> users and <n_services> services on <n_servers> servers"
exports.RPL_LUSERCLIENT = function(r_nick, r_n_users, r_n_services, r_n_servers) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "There are <n_users> users and <n_services> services on <n_servers> servers";
	re = new RegExp("<n_users>", "g");
	f_trailer = f_trailer.replace(re, r_n_users);
	re = new RegExp("<n_services>", "g");
	f_trailer = f_trailer.replace(re, r_n_services);
	re = new RegExp("<n_servers>", "g");
	f_trailer = f_trailer.replace(re, r_n_servers);

	return {
		prefix: undefined,
		command: RPL.LUSERCLIENT,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LUSEROP "<integer> :operator(s) online"
exports.RPL_LUSEROP = function(r_integer) {

	var re = undefined;

	var f_param = "<integer>";
	re = new RegExp("<integer>", "g");
	f_param = f_param.replace(re, r_integer);

	var f_trailer = "operator(s) online";

	return {
		prefix: undefined,
		command: RPL.LUSEROP,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LUSERUNKNOWN "<integer> :unknown connection(s)"
exports.RPL_LUSERUNKNOWN = function(r_integer) {

	var re = undefined;

	var f_param = "<integer>";
	re = new RegExp("<integer>", "g");
	f_param = f_param.replace(re, r_integer);

	var f_trailer = "unknown connection(s)";

	return {
		prefix: undefined,
		command: RPL.LUSERUNKNOWN,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LUSERCHANNELS "<integer> :channels formed"
exports.RPL_LUSERCHANNELS = function(r_integer) {

	var re = undefined;

	var f_param = "<integer>";
	re = new RegExp("<integer>", "g");
	f_param = f_param.replace(re, r_integer);

	var f_trailer = "channels formed";

	return {
		prefix: undefined,
		command: RPL.LUSERCHANNELS,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_LUSERME "<nick> :I have <n_cli> clients and <n_srv> servers"
exports.RPL_LUSERME = function(r_nick, r_n_cli, r_n_srv) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "I have <n_cli> clients and <n_srv> servers";
	re = new RegExp("<n_cli>", "g");
	f_trailer = f_trailer.replace(re, r_n_cli);
	re = new RegExp("<n_srv>", "g");
	f_trailer = f_trailer.replace(re, r_n_srv);

	return {
		prefix: undefined,
		command: RPL.LUSERME,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ADMINME "<server> :Administrative info"
exports.RPL_ADMINME = function(r_server) {

	var re = undefined;

	var f_param = "<server>";
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "Administrative info";

	return {
		prefix: undefined,
		command: RPL.ADMINME,
		params: f_param,
		trailer: f_trailer,
	};
};

// RPL_ADMINLOC1 ":<admin info>"
exports.RPL_ADMINLOC1 = function(r_admin_info) {

	var re = undefined;

	var f_trailer = "<admin info>";
	re = new RegExp("<admin info>", "g");
	f_trailer = f_trailer.replace(re, r_admin_info);

	return {
		prefix: undefined,
		command: RPL.ADMINLOC1,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ADMINLOC2 ":<admin info>"
exports.RPL_ADMINLOC2 = function(r_admin_info) {

	var re = undefined;

	var f_trailer = "<admin info>";
	re = new RegExp("<admin info>", "g");
	f_trailer = f_trailer.replace(re, r_admin_info);

	return {
		prefix: undefined,
		command: RPL.ADMINLOC2,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_ADMINEMAIL ":<admin info>"
exports.RPL_ADMINEMAIL = function(r_admin_info) {

	var re = undefined;

	var f_trailer = "<admin info>";
	re = new RegExp("<admin info>", "g");
	f_trailer = f_trailer.replace(re, r_admin_info);

	return {
		prefix: undefined,
		command: RPL.ADMINEMAIL,
		params: undefined,
		trailer: f_trailer,
	};
};

// RPL_TRYAGAIN "<command> :Please wait a while and try again." 
exports.RPL_TRYAGAIN = function(r_command) {

	var re = undefined;

	var f_param = "<command>";
	re = new RegExp("<command>", "g");
	f_param = f_param.replace(re, r_command);

	var f_trailer = "Please wait a while and try again.";

	return {
		prefix: undefined,
		command: RPL.TRYAGAIN,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOSUCHNICK "<nickname> :No such nick/channel" 
exports.ERR_NOSUCHNICK = function(r_nickname) {

	var re = undefined;

	var f_param = "<nickname>";
	re = new RegExp("<nickname>", "g");
	f_param = f_param.replace(re, r_nickname);

	var f_trailer = "No such nick/channel";

	return {
		prefix: undefined,
		command: ERR.NOSUCHNICK,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOSUCHSERVER "<server name> :No such server" 
exports.ERR_NOSUCHSERVER = function(r_server_name) {

	var re = undefined;

	var f_param = "<server name>";
	re = new RegExp("<server name>", "g");
	f_param = f_param.replace(re, r_server_name);

	var f_trailer = "No such server";

	return {
		prefix: undefined,
		command: ERR.NOSUCHSERVER,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOSUCHCHANNEL "<channel name> :No such channel" 
exports.ERR_NOSUCHCHANNEL = function(r_channel_name) {

	var re = undefined;

	var f_param = "<channel name>";
	re = new RegExp("<channel name>", "g");
	f_param = f_param.replace(re, r_channel_name);

	var f_trailer = "No such channel";

	return {
		prefix: undefined,
		command: ERR.NOSUCHCHANNEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_CANNOTSENDTOCHAN "<channel name> :Cannot send to channel" 
exports.ERR_CANNOTSENDTOCHAN = function(r_channel_name) {

	var re = undefined;

	var f_param = "<channel name>";
	re = new RegExp("<channel name>", "g");
	f_param = f_param.replace(re, r_channel_name);

	var f_trailer = "Cannot send to channel";

	return {
		prefix: undefined,
		command: ERR.CANNOTSENDTOCHAN,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_TOOMANYCHANNELS "<channel name> :You have joined too many channels" 
exports.ERR_TOOMANYCHANNELS = function(r_channel_name) {

	var re = undefined;

	var f_param = "<channel name>";
	re = new RegExp("<channel name>", "g");
	f_param = f_param.replace(re, r_channel_name);

	var f_trailer = "You have joined too many channels";

	return {
		prefix: undefined,
		command: ERR.TOOMANYCHANNELS,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_WASNOSUCHNICK "<nickname> :There was no such nickname" 
exports.ERR_WASNOSUCHNICK = function(r_nickname) {

	var re = undefined;

	var f_param = "<nickname>";
	re = new RegExp("<nickname>", "g");
	f_param = f_param.replace(re, r_nickname);

	var f_trailer = "There was no such nickname";

	return {
		prefix: undefined,
		command: ERR.WASNOSUCHNICK,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_TOOMANYTARGETS "<target> :<error code> recipients. <abort message>" 
exports.ERR_TOOMANYTARGETS = function(r_target, r_error_code, r_abort_message) {

	var re = undefined;

	var f_param = "<target>";
	re = new RegExp("<target>", "g");
	f_param = f_param.replace(re, r_target);

	var f_trailer = "<error code> recipients. <abort message>";
	re = new RegExp("<error code>", "g");
	f_trailer = f_trailer.replace(re, r_error_code);
	re = new RegExp("<abort message>", "g");
	f_trailer = f_trailer.replace(re, r_abort_message);

	return {
		prefix: undefined,
		command: ERR.TOOMANYTARGETS,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOSUCHSERVICE "<service name> :No such service" 
exports.ERR_NOSUCHSERVICE = function(r_service_name) {

	var re = undefined;

	var f_param = "<service name>";
	re = new RegExp("<service name>", "g");
	f_param = f_param.replace(re, r_service_name);

	var f_trailer = "No such service";

	return {
		prefix: undefined,
		command: ERR.NOSUCHSERVICE,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOORIGIN ":No origin specified" 
exports.ERR_NOORIGIN = function() {

	var re = undefined;

	var f_trailer = "No origin specified";

	return {
		prefix: undefined,
		command: ERR.NOORIGIN,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NORECIPIENT ":No recipient given (<command>)"
exports.ERR_NORECIPIENT = function(r_command) {

	var re = undefined;

	var f_trailer = "No recipient given (<command>)";
	re = new RegExp("<command>", "g");
	f_trailer = f_trailer.replace(re, r_command);

	return {
		prefix: undefined,
		command: ERR.NORECIPIENT,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOTEXTTOSEND ":No text to send"
exports.ERR_NOTEXTTOSEND = function() {

	var re = undefined;

	var f_trailer = "No text to send";

	return {
		prefix: undefined,
		command: ERR.NOTEXTTOSEND,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOTOPLEVEL "<mask> :No toplevel domain specified"
exports.ERR_NOTOPLEVEL = function(r_mask) {

	var re = undefined;

	var f_param = "<mask>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);

	var f_trailer = "No toplevel domain specified";

	return {
		prefix: undefined,
		command: ERR.NOTOPLEVEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_WILDTOPLEVEL "<mask> :Wildcard in toplevel domain"
exports.ERR_WILDTOPLEVEL = function(r_mask) {

	var re = undefined;

	var f_param = "<mask>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);

	var f_trailer = "Wildcard in toplevel domain";

	return {
		prefix: undefined,
		command: ERR.WILDTOPLEVEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_BADMASK "<mask> :Bad Server/host mask"
exports.ERR_BADMASK = function(r_mask) {

	var re = undefined;

	var f_param = "<mask>";
	re = new RegExp("<mask>", "g");
	f_param = f_param.replace(re, r_mask);

	var f_trailer = "Bad Server/host mask";

	return {
		prefix: undefined,
		command: ERR.BADMASK,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_UNKNOWNCOMMAND "<command> :Unknown command"
exports.ERR_UNKNOWNCOMMAND = function(r_command) {

	var re = undefined;

	var f_param = "<command>";
	re = new RegExp("<command>", "g");
	f_param = f_param.replace(re, r_command);

	var f_trailer = "Unknown command";

	return {
		prefix: undefined,
		command: ERR.UNKNOWNCOMMAND,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOMOTD ":MOTD File is missing" 
exports.ERR_NOMOTD = function() {

	var re = undefined;

	var f_trailer = "MOTD File is missing";

	return {
		prefix: undefined,
		command: ERR.NOMOTD,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOADMININFO "<server> :No administrative info available" 
exports.ERR_NOADMININFO = function(r_server) {

	var re = undefined;

	var f_param = "<server>";
	re = new RegExp("<server>", "g");
	f_param = f_param.replace(re, r_server);

	var f_trailer = "No administrative info available";

	return {
		prefix: undefined,
		command: ERR.NOADMININFO,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_FILEERROR ":File error doing <file op> on <file>" 
exports.ERR_FILEERROR = function(r_file_op, r_file) {

	var re = undefined;

	var f_trailer = "File error doing <file op> on <file>";
	re = new RegExp("<file op>", "g");
	f_trailer = f_trailer.replace(re, r_file_op);
	re = new RegExp("<file>", "g");
	f_trailer = f_trailer.replace(re, r_file);

	return {
		prefix: undefined,
		command: ERR.FILEERROR,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NONICKNAMEGIVEN ":No nickname given" 
exports.ERR_NONICKNAMEGIVEN = function() {

	var re = undefined;

	var f_trailer = "No nickname given";

	return {
		prefix: undefined,
		command: ERR.NONICKNAMEGIVEN,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_ERRONEUSNICKNAME "<nick> :Erroneous nickname" 
exports.ERR_ERRONEUSNICKNAME = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "Erroneous nickname";

	return {
		prefix: undefined,
		command: ERR.ERRONEUSNICKNAME,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NICKNAMEINUSE "<nick> :Nickname is already in use" 
exports.ERR_NICKNAMEINUSE = function(r_nick) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "Nickname is already in use";

	return {
		prefix: undefined,
		command: ERR.NICKNAMEINUSE,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NICKCOLLISION "<nick> :Nickname collision KILL from <user>@<host>" 
exports.ERR_NICKCOLLISION = function(r_nick, r_user, r_host) {

	var re = undefined;

	var f_param = "<nick>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);

	var f_trailer = "Nickname collision KILL from <user>@<host>";
	re = new RegExp("<user>", "g");
	f_trailer = f_trailer.replace(re, r_user);
	re = new RegExp("<host>", "g");
	f_trailer = f_trailer.replace(re, r_host);

	return {
		prefix: undefined,
		command: ERR.NICKCOLLISION,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_UNAVAILRESOURCE "<nick/channel> :Nick/channel is temporarily unavailable" 
exports.ERR_UNAVAILRESOURCE = function(r_nick_channel) {

	var re = undefined;

	var f_param = "<nick/channel>";
	re = new RegExp("<nick/channel>", "g");
	f_param = f_param.replace(re, r_nick_channel);

	var f_trailer = "Nick/channel is temporarily unavailable";

	return {
		prefix: undefined,
		command: ERR.UNAVAILRESOURCE,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_USERNOTINCHANNEL "<nick> <channel> :They aren't on that channel" 
exports.ERR_USERNOTINCHANNEL = function(r_nick, r_channel) {

	var re = undefined;

	var f_param = "<nick> <channel>";
	re = new RegExp("<nick>", "g");
	f_param = f_param.replace(re, r_nick);
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "They aren't on that channel";

	return {
		prefix: undefined,
		command: ERR.USERNOTINCHANNEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOTONCHANNEL "<channel> :You're not on that channel" 
exports.ERR_NOTONCHANNEL = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "You're not on that channel";

	return {
		prefix: undefined,
		command: ERR.NOTONCHANNEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_USERONCHANNEL "<user> <channel> :is already on channel" 
exports.ERR_USERONCHANNEL = function(r_user, r_channel) {

	var re = undefined;

	var f_param = "<user> <channel>";
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "is already on channel";

	return {
		prefix: undefined,
		command: ERR.USERONCHANNEL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOLOGIN "<user> :User not logged in" 
exports.ERR_NOLOGIN = function(r_user) {

	var re = undefined;

	var f_param = "<user>";
	re = new RegExp("<user>", "g");
	f_param = f_param.replace(re, r_user);

	var f_trailer = "User not logged in";

	return {
		prefix: undefined,
		command: ERR.NOLOGIN,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_SUMMONDISABLED ":SUMMON has been disabled" 
exports.ERR_SUMMONDISABLED = function() {

	var re = undefined;

	var f_trailer = "SUMMON has been disabled";

	return {
		prefix: undefined,
		command: ERR.SUMMONDISABLED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_USERSDISABLED ":USERS has been disabled" 
exports.ERR_USERSDISABLED = function() {

	var re = undefined;

	var f_trailer = "USERS has been disabled";

	return {
		prefix: undefined,
		command: ERR.USERSDISABLED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOTREGISTERED ":You have not registered" 
exports.ERR_NOTREGISTERED = function() {

	var re = undefined;

	var f_trailer = "You have not registered";

	return {
		prefix: undefined,
		command: ERR.NOTREGISTERED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NEEDMOREPARAMS "<command> :Not enough parameters" 
exports.ERR_NEEDMOREPARAMS = function(r_command) {

	var re = undefined;

	var f_param = "<command>";
	re = new RegExp("<command>", "g");
	f_param = f_param.replace(re, r_command);

	var f_trailer = "Not enough parameters";

	return {
		prefix: undefined,
		command: ERR.NEEDMOREPARAMS,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_ALREADYREGISTRED ":Unauthorized command (already registered)" 
exports.ERR_ALREADYREGISTRED = function() {

	var re = undefined;

	var f_trailer = "Unauthorized command (already registered)";

	return {
		prefix: undefined,
		command: ERR.ALREADYREGISTRED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOPERMFORHOST ":Your host isn't among the privileged" 
exports.ERR_NOPERMFORHOST = function() {

	var re = undefined;

	var f_trailer = "Your host isn't among the privileged";

	return {
		prefix: undefined,
		command: ERR.NOPERMFORHOST,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_PASSWDMISMATCH ":Password incorrect" 
exports.ERR_PASSWDMISMATCH = function() {

	var re = undefined;

	var f_trailer = "Password incorrect";

	return {
		prefix: undefined,
		command: ERR.PASSWDMISMATCH,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_YOUREBANNEDCREEP ":You are banned from this server" 
exports.ERR_YOUREBANNEDCREEP = function() {

	var re = undefined;

	var f_trailer = "You are banned from this server";

	return {
		prefix: undefined,
		command: ERR.YOUREBANNEDCREEP,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_YOUWILLBEBANNED ":You will be banned"
exports.ERR_YOUWILLBEBANNED = function() {

	var re = undefined;

	var f_trailer = "You will be banned";

	return {
		prefix: undefined,
		command: ERR.YOUWILLBEBANNED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_KEYSET "<channel> :Channel key already set"
exports.ERR_KEYSET = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Channel key already set";

	return {
		prefix: undefined,
		command: ERR.KEYSET,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_CHANNELISFULL "<channel> :Cannot join channel (+l)"
exports.ERR_CHANNELISFULL = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Cannot join channel (+l)";

	return {
		prefix: undefined,
		command: ERR.CHANNELISFULL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_UNKNOWNMODE "<char> :is unknown mode char to me for <channel>"
exports.ERR_UNKNOWNMODE = function(r_char, r_channel) {

	var re = undefined;

	var f_param = "<char>";
	re = new RegExp("<char>", "g");
	f_param = f_param.replace(re, r_char);

	var f_trailer = "is unknown mode char to me for <channel>";
	re = new RegExp("<channel>", "g");
	f_trailer = f_trailer.replace(re, r_channel);

	return {
		prefix: undefined,
		command: ERR.UNKNOWNMODE,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_INVITEONLYCHAN "<channel> :Cannot join channel (+i)"
exports.ERR_INVITEONLYCHAN = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Cannot join channel (+i)";

	return {
		prefix: undefined,
		command: ERR.INVITEONLYCHAN,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_BANNEDFROMCHAN "<channel> :Cannot join channel (+b)"
exports.ERR_BANNEDFROMCHAN = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Cannot join channel (+b)";

	return {
		prefix: undefined,
		command: ERR.BANNEDFROMCHAN,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_BADCHANNELKEY "<channel> :Cannot join channel (+k)"
exports.ERR_BADCHANNELKEY = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Cannot join channel (+k)";

	return {
		prefix: undefined,
		command: ERR.BADCHANNELKEY,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_BADCHANMASK "<channel> :Bad Channel Mask"
exports.ERR_BADCHANMASK = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Bad Channel Mask";

	return {
		prefix: undefined,
		command: ERR.BADCHANMASK,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOCHANMODES "<channel> :Channel doesn't support modes"
exports.ERR_NOCHANMODES = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "Channel doesn't support modes";

	return {
		prefix: undefined,
		command: ERR.NOCHANMODES,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_BANLISTFULL "<channel> <char> :Channel list is full"
exports.ERR_BANLISTFULL = function(r_channel, r_char) {

	var re = undefined;

	var f_param = "<channel> <char>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);
	re = new RegExp("<char>", "g");
	f_param = f_param.replace(re, r_char);

	var f_trailer = "Channel list is full";

	return {
		prefix: undefined,
		command: ERR.BANLISTFULL,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_NOPRIVILEGES ":Permission Denied- You're not an IRC operator"
exports.ERR_NOPRIVILEGES = function() {

	var re = undefined;

	var f_trailer = "Permission Denied- You're not an IRC operator";

	return {
		prefix: undefined,
		command: ERR.NOPRIVILEGES,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_CHANOPRIVSNEEDED "<channel> :You're not channel operator" 
exports.ERR_CHANOPRIVSNEEDED = function(r_channel) {

	var re = undefined;

	var f_param = "<channel>";
	re = new RegExp("<channel>", "g");
	f_param = f_param.replace(re, r_channel);

	var f_trailer = "You're not channel operator";

	return {
		prefix: undefined,
		command: ERR.CHANOPRIVSNEEDED,
		params: f_param,
		trailer: f_trailer,
	};
};

// ERR_CANTKILLSERVER ":You can't kill a server!" 
exports.ERR_CANTKILLSERVER = function() {

	var re = undefined;

	var f_trailer = "You can't kill a server!";

	return {
		prefix: undefined,
		command: ERR.CANTKILLSERVER,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_RESTRICTED ":Your connection is restricted!" 
exports.ERR_RESTRICTED = function() {

	var re = undefined;

	var f_trailer = "Your connection is restricted!";

	return {
		prefix: undefined,
		command: ERR.RESTRICTED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_UNIQOPPRIVSNEEDED ":You're not the original channel operator" 
exports.ERR_UNIQOPPRIVSNEEDED = function() {

	var re = undefined;

	var f_trailer = "You're not the original channel operator";

	return {
		prefix: undefined,
		command: ERR.UNIQOPPRIVSNEEDED,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_NOOPERHOST ":No O-lines for your host" 
exports.ERR_NOOPERHOST = function() {

	var re = undefined;

	var f_trailer = "No O-lines for your host";

	return {
		prefix: undefined,
		command: ERR.NOOPERHOST,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_UMODEUNKNOWNFLAG ":Unknown MODE flag" 
exports.ERR_UMODEUNKNOWNFLAG = function() {

	var re = undefined;

	var f_trailer = "Unknown MODE flag";

	return {
		prefix: undefined,
		command: ERR.UMODEUNKNOWNFLAG,
		params: undefined,
		trailer: f_trailer,
	};
};

// ERR_USERSDONTMATCH ":Cannot change mode for other users"
exports.ERR_USERSDONTMATCH = function() {

	var re = undefined;

	var f_trailer = "Cannot change mode for other users";

	return {
		prefix: undefined,
		command: ERR.USERSDONTMATCH,
		params: undefined,
		trailer: f_trailer,
	};
};
