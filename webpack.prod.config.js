const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { getBaseConfig } = require('@edx/frontend-build');

const origConfig = getBaseConfig('webpack-prod');

const config = {
  ...origConfig,
  /* option overrides or extensions */
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  // Exclude react and any package that has it as a dependency from the bundle.
  externals: {
    react: 'react',
    '@edx/frontend-platform/auth': '@edx/frontend-platform/auth',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  optimization: {},
};

module.exports = config;
