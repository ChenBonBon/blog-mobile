const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", "ts", ".jsx", "tsx"],
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@public": path.resolve(__dirname, "../public"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
    clean: true,
  },
};
