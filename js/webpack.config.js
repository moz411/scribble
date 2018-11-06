var path = require('path');

var loaders = [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
];


module.exports = [

    {
        entry: path.resolve( __dirname, 'src', 'index.js' ),
        devtool: 'inline-source-map',
        output: {
            filename: 'index.js',
            path: path.resolve( __dirname, '..', 'scribble', 'static' ),
            libraryTarget: 'amd'
        },
//        devtool: 'source-map',
//        module: {
 //           loaders: loaders
//        },
//        externals: ['p5', 'chart', 'jupyter-js-widgets', '@jupyter-widgets/base', '@jupyter-widgets/controls']
    },
    {
        entry: path.resolve( __dirname, 'src', 'extension.js' ),
        devtool: 'inline-source-map',
        output: {
            filename: 'extension.js',
            path: path.resolve( __dirname, '..', 'scribble', 'static' ),
            libraryTarget: 'amd'
           }
    },
];
