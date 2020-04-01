const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoader = require('vue-loader')
const path = require('path')

module.exports = {

  entry: "./src/index.js",

  output: {
    publicPath: "http://localhost:9000/",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },

  mode: "development",

  resolve: {
    extensions: [".vue", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: false,
        }
      }
    ]
  },

  plugins: [
    new VueLoader.VueLoaderPlugin(),

    new ModuleFederationPlugin({
      name: 'protal',

      library: { 
        type: "var", 
        name: "protal"
      },

      remotes: {
        'modulea': 'modulea'
      }
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}