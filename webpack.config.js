var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/js/main.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [

        ]
    },
    devServer: {
        contentBase: "./src/public",
        colors: true,
        historyApiFallback: true,
        inline: true
    } 
}