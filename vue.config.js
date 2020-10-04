const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('开始自定义webpack');
module.exports = {
  chainWebpack: config => {
    config.plugin('clean')
      .before('vue-loader')
      .use(CleanWebpackPlugin, [{
        cleanOnceBeforeBuildPatterns: ['/news'],
      }]);
  },
  publicPath: '/project/dist/views/',
  outputDir: 'project/dist/views/',
  devServer: {
    contentBase: path.join(__dirname, 'project'),
    compress: true,
  },
  pages: { // filename相对于路径为outputDir
    index: {
      entry: 'src/nav_menu.js',
      template: 'project/index.html',
      filename: 'layout.html',
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