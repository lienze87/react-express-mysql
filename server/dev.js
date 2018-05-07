const express=require('express');
const router = require('./routes');
const $conf = require('../config/app');
const bodyParser = require('body-parser');
const formidable=require('express-formidable');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');
const config=require('../config/webpack.config.dev.js');
const compiler=webpack(config);

const serverPort=$conf.server.port;

const app = express();
//将webpack处理后的index.html文件传递给server
app.use( webpackDevMiddleware(compiler, {
  publicPath: "/"
}));


//对url进行解码
app.use(bodyParser.urlencoded({ extended: true }));
//转换mulitipart/form-data
app.use(formidable({
  encoding:'utf-8',
  multiples:true
}));
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'http://loaclhost:'+serverPort)
  console.log(req.originalUrl)
  next();
});
//引入路由
app.use('/',router);

//必须加上此中间件，否则异步响应导致的临时404会中断程序
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = res.get('status')||404;
  next(err);
});

app.use((err,req,res,next)=>{
  const mate=`[${new Date()}]  请求地址:${req.url}\n`;
  console.log(mate+err.status+'\n');
})

//监听端口
app.listen(serverPort, function () {
  console.log('Example app listening at port:'+serverPort);
})