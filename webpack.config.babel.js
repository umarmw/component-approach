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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    //publicPath: "/dist/js/",
    open: true,
    compress: true,
    port: 9000
  },
  plugins: [
  ],
  context: path.resolve(__dirname, "src/modules/"),
  entry: {
    bootloader: "./bootloader.js",
    app: "./app.js",
    carousel: "./bootstrap-carousel.js",
    slick: "./slick-carousel.js",
    modal: "./modal.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: '[name].js'
  },
}