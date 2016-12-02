'use strict';


var ARGS = process.argv.map(function (arg) {
	return arg.replace(/^--/, '');
});


module.exports = function (configs, options) {

	configs = configs || {};
	options = options || {log: true};

	var output = [];
	var entry_configs = ARGS.filter(function (arg) {
		return configs[arg];
	});


	if (entry_configs.length == 1) {

		if (options.log) {
			console.log('[BUILD START]:', entry_configs[0]);
			console.log('');
		}

		return configs[entry_configs[0]];

	}


	if (entry_configs > 1) {

		entry_configs.forEach(function(pack) {

			if (options.log) console.log('[BUILD START]:', pack);
			output = output.concat(configs[pack]);

		});

		if (options.log) console.log('');

		return configs;

	}


	for ( var name in configs ) {

		if (options.log) console.log('[BUILD START]:', name);
		output = output.concat(configs[name]);

	}


	if (options.log) console.log('');

	return output;

};