const path = require('path')
// const webpack = require('webpack') // 热更新的第二步
// 只要是插件都要放到 plugins 里面
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // devServer: {//  webpack-dev-server 命令参数的第二种方式 命令参数的第二种形式 相对来说 麻烦一些
  //   // webpack 里带 s 的属性 都是数组 
  //   // --open --port 3000 --contentBase src --hot 建议这种方式
  //   // 热更新的第一步 
    
  //   open: true,
  //   port: 3000,
  //   contentBase: 'src',
  //   hot: true,
  // },
  plugins: [
    // new webpack.HotModuleReplacementPlugin() , // 热更新的第三步
    new htmlWebpackPlugin({ // 创建一个在内存中生成 html 页面的插件
      template: path.join(__dirname, './src/index.html'), // 制定模板页面，将来会根据制定的页面路径，去生成内存中的页面
      filenam: 'index.html' // 指定生成的页面的名称
    })
  ],
  module: { // 这个节点，用于配置 所有 第三方模块 加载器 
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}, // 处理图片路径的 loader 
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      { test: /\.js$/, use: 'babel-loader' , exclude: /node_modules/},
      { test: /.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
}