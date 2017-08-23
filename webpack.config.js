/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// minify or not
// entry sources (examples or src)
const dev = (process.env.NODE_ENV !== 'production')

console.log(`MODE=${dev ? 'dev' : 'production'}`)

function getRawCssLoaders(module, inject) {
  const loaders = []
  if (inject) loaders.push('style-loader')
  loaders.push(`css-loader${module ? '?modules&localIdentName=[path]_[local]__[hash:base64:5]' : ''}`)
  if (!dev) loaders.push('postcss-loader')
  loaders.push('sass-loader')

  return loaders
}

module.exports = {
  devtool: dev ? 'inline-source-map' : 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'dist/front'),
    filename: 'index.js',
    publicPath: '/',
  },
  entry: [
    path.resolve('src/front/index.jsx'),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './src/front'),
    hot: false,
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  context: (() => {
    return path.join(__dirname, 'src/front/')
  })(),
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.jpg', '.png', '.gif'],
    modules: ['node_modules'],
    alias: {
      styles: path.resolve('./src/front/styles'),
    },
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: (() => {
        const loaders = []
        if (dev) {
          loaders.push('react-hot-loader')
        }
        loaders.push('babel-loader?presets[]=react,presets[]=es2015,presets[]=es2017,presets[]=stage-0')
        return loaders
      })(),
      exclude: /node_modules/,
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.(pdf)$/,
      loaders: [
        'file-loader?name=[path][name].[ext]',
      ],
      exclude: /node_modules/,
    }, {
      test: /global\.scss/,
      loaders: getRawCssLoaders(false, true),
    }, {
      test: /\.scss$/,
      exclude: [/node_modules/, /global\.scss/],
      loaders: getRawCssLoaders(true, true),
    }],
  },
  plugins: (() => {
    const plugins = []
    if (dev) {
      plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    plugins.push(new HtmlWebpackPlugin({
      template: 'index.html',
    }))

    return plugins
  })(),
  performance: {
    hints: false,
  },
}
