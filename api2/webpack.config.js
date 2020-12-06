var path =  require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ["./src/shared/infra/http/server.ts"],
  output: {
    filename: 'api.bundle.js',
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader',exclude: /node_modules/,},
      { test: /\.json/, loader: "json-loader", exclude:/node_modules/,}
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".json"],
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]
  },
  target: 'node',
  externals: [nodeExternals()],

  plugins: []
};
