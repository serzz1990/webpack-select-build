'use strict';

var path = require('path');
var ARGS = process.argv
    .filter(function (a) { return a.search(/^--env./) > -1 })
    .map(function (arg) { return arg.replace(/^--env./, '')});




function getConfig (configs, key) {

    var configPath = path.resolve(WSC.resolvePath, configs[key]);
    var config = require(configPath);

    return typeof config == 'function'? config() : config;

}


function WSC (configs, options) {

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

        return getConfig(configs, entry_configs[0]);

    }


    if (entry_configs > 1) {

        entry_configs.forEach(function(pack) {

            if (options.log) console.log('[BUILD START]:', pack);
            output = output.concat(getConfig(configs, pack));

        });

        if (options.log) console.log('');

        return configs;

    }


    for (var name in configs) {

        if (options.log) console.log('[BUILD START]:', name);
        output = output.concat(getConfig(configs, name));

    }


    if (options.log) console.log('');

    return output;

}


// resolve root path;
WSC.resolvePath = process.cwd();


module.exports = WSC;
