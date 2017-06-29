# SELECT WEBPACK CONFIG


### Use

main webpack.config.js

    var wsc = require('webpack-select-config');
    
    // resolve path
    // default: process.cwd()
    wsc.resolvePath = process.cwd() + '/configs/'
    
    var configs = {
        config1 : '/path1/webpack.config.js'
        config2 : '/path2/webpack.config.js'
        config3 : '/path3/webpack.config.js'
    };
    
    return wsc(configs);
    
package.json

    {
        ...
        "scripts": {
            "task": "webpack --display-modules --watch"
        }
    }
    
Build config1

    npm run task -- --env.config1 
    
Build config1 and config3

    npm run task -- --env.config1 --env.config3
    
Build all

    npm run task