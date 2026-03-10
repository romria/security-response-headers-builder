import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration } from 'webpack';
import 'webpack-dev-server';

const isProd = process.env.NODE_ENV === 'production';

const config: Configuration = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'eval-source-map',
  entry: './src/scripts/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 8000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
};

export default config;
