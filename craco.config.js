const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  babel: {
    plugins: [
      //
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  webpack: {
    plugins: [
      //
      new CircularDependencyPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
};
