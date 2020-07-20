/**
 * @file index.js
 * @author 4264332(@qq.com)
 * @email 4264332(@qq.com)
 * @create date 2020-07-08 21:26:25
 * @modify date 2020-07-08 21:26:25
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
    mode,
    entry: './src/index',
    output: {
        publicPath: 'http://localhost:3002/' // New
    },
    devtool: 'source-map',
    optimization: {
        minimize: mode === 'production'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')]
                }
            }
        ]
    },
    plugins: [
        // New
        new ModuleFederationPlugin({
            name: 'application_b',
            library: {type: 'var', name: 'application_b'},
            filename: 'remoteEntry.js',
            exposes: {
                './SayHelloFromB': './src/app'
            },
            remotes: {
                application_a: 'application_a'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
