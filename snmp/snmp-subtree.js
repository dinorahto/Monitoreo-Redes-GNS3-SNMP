
var snmp = require ("../User/private/snmp/snmp-native");

if (process.argv.length < 6) {
	console.log ("usage: snmp-subtree <target> <community> <version> <oid>");
	process.exit (1);
}

var target = process.argv[2];
var community = process.argv[3];
var version = (process.argv[4] == "2c") ? snmp.Version2c : snmp.Version1;

var oid = process.argv[5];

var session = snmp.createSession (target, community, {version: version});

function doneCb (error) {
	if (error)
		console.error (error.toString ());
}

function feedCb (varbinds) {
	for (var i = 0; i < varbinds.length; i++) {
		if (snmp.isVarbindError (varbinds[i]))
			console.error (snmp.varbindError (varbinds[i]));
		else
			console.log (varbinds[i].oid + "|" + varbinds[i].value);
	}
}

var maxRepetitions = 20;

session.subtree (oid, maxRepetitions, feedCb, doneCb);
