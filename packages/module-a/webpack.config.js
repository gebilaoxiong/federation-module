const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const VueLoader = require('vue-loader')
const path = require('path')

module.exports = {

  entry: "./src/index",

  output: {
    publicPath: "http://localhost:9001/",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9001
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
      name: 'modulea',

      library: { 
        type: "var", 
        name: "modulea"
      },

      filename: "remoteEntry.js",

      exposes: {
        'HelloWorld': './src/hello-world.vue'
      },

      shared: ["vue", "vuex", "vue-router"]
    })
  ]
}