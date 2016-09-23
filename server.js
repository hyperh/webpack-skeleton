const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = process.env.PORT;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(port, 'localhost', err => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Listening at http://localhost:${port}/`);
});
