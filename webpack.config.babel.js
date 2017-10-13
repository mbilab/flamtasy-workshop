import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

module.exports = {
    devServer: {
        allowedHosts: ['zoro.ee.ncku.edu.tw'],
        contentBase: `${__dirname}/app/assets`,
        host: '0.0.0.0',
        stats: { colors: true, modules: false },
    },
    entry: './app/app.js',
    node: { fs: 'empty' },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.(jpg|png)$/, use: 'url-loader?limit=10000&name=[hash:5].[ext]' },
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
