/**
 * Created by yongyuehuang on 2017/3/30.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(3133, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3133');
});