const HtmlWebpackPlugin = require("html-webpack-plugin");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = function(env) {
    // Webpack Configuration Object
    return {
        entry: {
            app: './src/main.ts'
        },

        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
                scriptLoading: 'blocking'
            }),
            new ProgressBarPlugin({
                format: '  build [:bar] ' + chalk.green.bold(':percent') + '\t' + chalk.blue.bold(':elapsed seconds'),
                clear: false
            })
        ]
    };
}