const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('开始自定义webpack');
module.exports = {
  chainWebpack: config => {
    config.plugin('clean')
      .before('vue-loader')
      .use(CleanWebpackPlugin, [{
        cleanOnceBeforeBuildPatterns: ['/news'],
        cleanStaleWebpackAssets: false,
      }]);
  },
  // publicPath: '/project/dist/views/',
  outputDir: 'project/dist/views/',
  devServer: {
    contentBase: path.join(__dirname, 'project'),
    compress: true,
  },
  pages: { // filename相对于路径为outputDir
    index: {
      entry: 'src/nav_menu.js',
      template: 'project/dist/views/layout.html',
      filename: 'layout.html',
      minify: false,
    },
    others: {
      entry: 'src/main.js',
      title: 'target',
      template: 'public/index.html',
      filename: 'news/index.html'
    }
  }
  // outputDir: 'project/dist/views/news',
  // assetsDir: 'project'
};