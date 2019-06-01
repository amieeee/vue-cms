## vue项目注意问题

### 出现的问题
  + 出现处理不了的文件 就需要第三方 loader 
  + webpack 
  + 出现 不是内部或者外部命令 说明没有安装 可能原来安装 但是现在没有装
  + 看看有没有现成的 去 mint-ui 中去找

### git 提交
`
  1. git add .
  2. git commit -m "提交信息"
     git add remote origin 
  3. git push origin master
`

### mint-ui 返回上一页
@click.native="$router.back(-1)"

### 打包图片的时候要注意 图片大小的限制 
{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=8500&name=[hash:8]-[name].[ext]'}, // 处理图片路径的 loader 
limit = 字节数 安装最大的图片的尺寸 * 1024

### 启动 phpstudy 然后 把 dist 中的文件 复制到 phpstudy 根目录里  然后启动  ngrok 输入 ngrok http 80 然后就可以访问出现的网址了 相当于上线

### 使用 mui 中的样式 直接把代码复制过来 在检查元素 修改样式