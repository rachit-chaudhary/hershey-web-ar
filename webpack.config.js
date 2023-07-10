const nodeExternals = require("webpack-node-externals")
const path = require("path")

const typicalReact = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    }
  ]
}

const clientConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  mode: "development",
  module: typicalReact
}

const clientARConfig = {
  entry: "./src/ar.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "ar-main.js"
  },
  mode: "development",
  module: typicalReact
}

const serverConfig = {
  entry: "./server.js",
  output: {
    path: __dirname,
    filename: "server-compiled.js"
  },
  externals: [nodeExternals()],
  target: "node",
  mode: "production",
  module: typicalReact
}

module.exports = [clientConfig, clientARConfig, serverConfig]