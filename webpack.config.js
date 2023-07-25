const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssNormalize = require('postcss-normalize')
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      ident: 'postcss',
      plugins: [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            browsers: '> 5% in KR, defaults, not IE < 11',
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          },
        ],
        postcssNormalize(),
      ],
    },
    sourceMap: true,
  },
}
module.exports = {
  mode: 'development',
  entry: {
    bundle: ['./example/src/index.tsx'],
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'example'),
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.ts|.tsx$/, exclude: /node_modules/, use: ['ts-loader'] },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', postcssConfig],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', postcssConfig, 'sass-loader'],
      },
    ],
  },
}
