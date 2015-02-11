var path = require("path");
var webpack = require("webpack");
var bowerConfig = require("./bower");

module.exports = {

    entry: path.resolve(bowerConfig.main),

    output: {
        path: path.resolve(bowerConfig.dist),
        filename: 'defaultTesting.js',
        libraryTarget: 'umd',
        library: 'defaultTesting'
    },

    externals: {
        defaultTesting: 'defaultTesting'
    },

    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.UglifyJsPlugin()
    ]
};