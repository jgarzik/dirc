#!/usr/bin/env node

var fs = require('fs');
var data = String(fs.readFileSync('replies.dat'));
var lines = data.split("\n");
var n_line = 0;

function scanArgStr(argarr, argDict, s, wantSym)
{
	while (1) {
		var bg = s.indexOf('<');
		if (bg < 0)
			return;
		s = s.slice(bg + 1);
		var end = s.indexOf('>');
		if (end < 0)
			return;

		var tag = s.slice(0, end);
		s = s.slice(end + 1);

		if (tag in argDict)
			continue;
		argDict[tag] = true;

		if (wantSym) {
			var reTag = /[\s'&\/]+/g;
			tag = tag.replace(reTag, "_");

			var rePound = /#/g;
			tag = tag.replace(rePound, "n");

			tag = "r_" + tag;
		}

		argarr.push(tag);
	}
}

function pr_hdr(line, command, params, trailer)
{
	params = params.replace(/\s\s*$/, '');

	var args = [];
	var argSym = [];
	var argDict = {};
	scanArgStr(argSym, argDict, params, true);
	scanArgStr(argSym, argDict, trailer, true);

	console.log("\n// " + line);
	var argstr = argSym.join(', ');
	console.log("exports." + command + " = function(" + argstr + ") {");

	var reWS = /^\s*$/;

	args = [];
	argDict = {};
	scanArgStr(args, argDict, params, false);
	argSym = [];
	argDict = {};
	scanArgStr(argSym, argDict, params, true);

	var haveParams = !params.match(reWS);
	if (haveParams) {
	console.log("\n\tvar re = undefined;");
	console.log("\n\tvar f_param = \"" + params + "\";");
	for (var i = 0; i < args.length; i++) {
		console.log("\tre = new RegExp(\"<" + args[i] + ">\", \"g\");");
		console.log("\tf_param = f_param.replace(re, " + argSym[i] + ");");
	}
	}

	args = [];
	argDict = {};
	scanArgStr(args, argDict, trailer, false);
	argSym = [];
	argDict = {};
	scanArgStr(argSym, argDict, trailer, true);

	var haveTrailer = !trailer.match(reWS);
	if (haveTrailer) {
	if (!haveParams)
		console.log("\n\tvar re = undefined;");
	console.log("\n\tvar f_trailer = \"" + trailer + "\";");
	for (var i = 0; i < args.length; i++) {
		console.log("\tre = new RegExp(\"<" + args[i] + ">\", \"g\");");
		console.log("\tf_trailer = f_trailer.replace(re, " + argSym[i] + ");");
	}
	}

	console.log("\n\treturn {");
	console.log("\t\tprefix: undefined,");

	var reCmd = /_/g;
	var cmdCode = command.replace(reCmd, ".");
	console.log("\t\tcommand: " + cmdCode + ",");

	if (haveParams)
		console.log("\t\tparams: f_param,");
	else
		console.log("\t\tparams: undefined,");
	if (haveTrailer)
		console.log("\t\ttrailer: f_trailer,");
	else
		console.log("\t\ttrailer: undefined,");
}

function pr_ftr()
{
	console.log("\t};\n};");
}


function parseLine(line)
{
	var ws_re = /^\s*$/;
	if (ws_re.exec(line))
		return;

	n_line++;
	var re = /^(\S+)\s+"([^:]*):(.*)"/;
	var res = re.exec(line);
	var command = undefined;
	var params = undefined;
	var trailer = undefined;
	if (!res) {
		var re = /^(\S+)\s+"(.*)"/;
		var res = re.exec(line);
		if (!res) {
			console.error("Line " + n_line + " did not match: " + line);
			return;
		}

		command = res[1];
		params = '';
		trailer = res[2];
	} else {
		command = res[1];
		params = res[2];
		trailer = res[3];
	}

	pr_hdr(line, command, params, trailer);
	pr_ftr();
}

var hdrdata = String(fs.readFileSync('replies.js.hdr'));
console.log(hdrdata);
lines.forEach(parseLine);

