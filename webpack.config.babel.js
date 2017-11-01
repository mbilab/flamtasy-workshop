import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import {resolve} from 'path'

module.exports = {
    context: resolve('app'),
    devServer: {
        allowedHosts: ['merry.ee.ncku.edu.tw', 'zoro.ee.ncku.edu.tw'],
        contentBase: `${__dirname}/app/assets`,
        host: '0.0.0.0',
        stats: { colors: true, modules: false },
    },
    entry: './app.js',
    node: { fs: 'empty' },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.ttf$/, use: 'file-loader?name=fonts/[hash:7].[ext]'},
            { test: /\.(jpg|png)$/, use: 'file-loader?limit=10000&name=[path][name].[ext]' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: { loader: 'vue-loader', options: {
                loaders: { sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' },
                postcss: { plugins: [autoprefixer] },
            }}},
        ]
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
}

if ('production' === process.env.NODE_ENV) {
  module.exports.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false },
    }),
  ]
}

// vi:et:sw=4:ts=4
