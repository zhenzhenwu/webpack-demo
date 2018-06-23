const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',   // 开发工具
    devServer: {                    // webpack-dev-server
        contentBase: './dist',
    },
});