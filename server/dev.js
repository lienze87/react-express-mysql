const express=require('express');
const router = require('./routes');
const $conf = require('../config/app');
const bodyParser = require('body-parser');
const formidable=require('express-formidable');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');
const config=require('../config/webpack.config.dev.js');
const compiler=webpack(config);
require('events').EventEmitter.prototype._maxListeners = 100;
const serverPort=$conf.server.port;

const app = express();
//将webpack处理后的index.html文件传递给server
app.use( webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

//对url进行解码
app.use(bodyParser.urlencoded({ extended: true }));
//转换mulitipart/form-data
app.use(formidable({
  encoding:'utf-8',
  multiples:true
}));

app.use((req, res, next)=>{  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
  console.log(req.session,req.cookies,req.originalUrl)
  return next();
});

//引入路由
app.all('*',router);

/**
 * 此中间件是必要的,相关信息请查看
 * https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
 * 当一个中间件写入response body或headers，但没有调用res.end()，而是调用了next()函数
 * 然后核心的Server.prototype.handle函数会被调用,它会注意到:
 *1.堆栈中没有更多中间件，and/or
 *2.response.headerSent的值是true
 *所以，它会抛出一个错误。但它引发的错误
 *只是这个基本的回应(来自连接http.js源代码):
 *res.statusCode = 404;
 *res.setHeader('Content-Type', 'text/plain');
 *res.end('Cannot ' + req.method + ' ' + req.url);
 *此处进行了setHeader,所以在API中进行res.json()时会发生错误
 *Error: Can't set headers after they are sent to the client
 * */

app.use((req,res,next)=>{
  const mate=`[${new Date()}] ${res.headersSent}\n`;
  console.log(mate+'\n');
});

//监听端口
app.listen(serverPort, function () {
  console.log('Example app listening at port:'+serverPort);
})