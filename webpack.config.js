var nodeExternals = require('webpack-node-externals');
var path = require('path');
const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'markto': './index.js',
    'test/index.bundle': './test/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
        test: /\.(mt|xml)$/,
        use: ['markto-loader']
      }
    ]
  },
  resolveLoader: {
    alias: {
      'markto-loader': path.join(__dirname, '/src/markto_loader.js')
    }
  }
}
module.exports = config;
