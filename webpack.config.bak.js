const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack  = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, './src/index.js'),
        print: path.join(__dirname, './src/print.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /(\.jsx|\.js)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: { module: true } }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',   // 开发工具
    devServer: {                    // webpack-dev-server
        contentBase: './dist',
        // hot: true                   // 启用热模块更新
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),   // 清理/dist文件夹
        new HtmlWebpackPlugin({         // 生成HTML文件，并动态添加bundle
            title: 'Output Management'
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}