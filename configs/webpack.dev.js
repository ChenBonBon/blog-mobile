const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
