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
    ]
  },
  plugins: [
  ],
  context: path.resolve(__dirname, "src/modules/"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "apa.js"
  },
};
