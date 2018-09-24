const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.vue',
      '.json'
    ],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}
