const path = require('path');
const htmlWebPack = require('html-webpack-plugin');
module.exports = {
    entry: './FrontEnd/app.js',
    output: {
        path: path.join(__dirname, './src/public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.handlebars$/, 
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new htmlWebPack({
            template: './FrontEnd/index.handlebars',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    devtool: 'source-map'
};