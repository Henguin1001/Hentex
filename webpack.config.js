var nodeExternals = require('webpack-node-externals');

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
  }
}
module.exports = config;
