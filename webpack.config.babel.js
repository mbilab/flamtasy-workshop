import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

module.exports = {
    devServer: {
        allowedHosts: ['zoro.ee.ncku.edu.tw'],
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
            { test: /\.pug$/, use: ['file-loader?name=[name].html', 'extract-loader', 'html-loader', 'pug-html-loader'] },
            { test: /\.sass$/, use: [
                'file-loader?name=[name].css',
                'extract-loader',
                'css-loader',
                { loader: 'postcss-loader', options: { plugins: [
                    autoprefixer,
                ]}},
                'sass-loader',
            ]},
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

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false },
    }),
  ]
}

// vi:et:sw=4:ts=4
