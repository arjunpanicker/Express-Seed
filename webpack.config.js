const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(mod => {
        nodeModules[mod] = 'commonjs' + mod;
    });

module.exports = {
    entry: './src/main.ts',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: nodeModules,
    mode: "development",
    plugins: [
        new CopyWebpackPlugin([
            { from: '/src/*' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}