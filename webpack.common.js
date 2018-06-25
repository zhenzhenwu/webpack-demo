const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./config')

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'test')],
    options: {
        formatter: require('eslint-friendly-formatter'),    // 可以让eslint的错误信息出现在终端上
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})

module.exports = {
    entry: {
        app: path.join(__dirname, './src/index.js'),
        print: path.join(__dirname, './src/print.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            { 
                test: /(\.jsx|\.js)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',   //  https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A 
            '@': path.join(__dirname, '..', 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),   // 清理/dist文件夹
        new HtmlWebpackPlugin({             // 生成HTML文件，并动态添加bundle
            filename: 'index.html',         
            template: 'index.html',         // 使用模板文件
            inject: true
        }),
        new VueLoaderPlugin()
    ]
}