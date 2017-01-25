# SELECT WEBPACK CONFIG


### Use

main webpack.config.js

    var wsc = require('webpack-select-config');
    
    var configs = {
        config1 : require('/path1/webpack.config.js')
        config2 : require('/path2/webpack.config.js')
        config3 : require('/path3/webpack.config.js')
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