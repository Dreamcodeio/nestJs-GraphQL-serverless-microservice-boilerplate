const path = require('path');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.ts'],
  },
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  externals: [
    'amqp-connection-manager',
    'amqplib',
    'cache-manager',
    'class-transformer',
    'apollo-server-fastify',
    '@nestjs/microservices',
    'grpc',
    'mqtt',
    'nats',
    'redis',
    'encoding',
    'utf-8-validate',
    'bufferutil',
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/schema.graphql', to: 'src/schema.graphql' },
    ]),
  ],
};
