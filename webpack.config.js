const {resolve} = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'main.js'),

  output: {
    filename: 'static/js/bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-maps',

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    historyApiFallback: {
      disableDotRules: true,
    },
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {modules: false}]],
            plugins: [
              ['transform-react-jsx', {pragma: 'h', useBuiltIns: true}],
            ],
            compact: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
