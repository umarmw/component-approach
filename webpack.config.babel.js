import path from "path";

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
  ],
  context: path.resolve(__dirname, "src/modules/"),
  entry: {
    app: "./app.js",
    carousel: "./bootstrap-carousel.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: '[name].js'
  },
}