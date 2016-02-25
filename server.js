var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new express();
var port = 8080;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/style'));

app.get('*', function(req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.listen(port, function(err) {
  if (err) console.error(err)
  else console.info('Listening on port %s.', port)
});
