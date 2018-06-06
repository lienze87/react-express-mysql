const express = require('express');
const path=require('path');
const router = require('./routes');
const $conf = require('../config/app');
const bodyParser = require('body-parser');
const formidable=require('express-formidable');
require('events').EventEmitter.prototype._maxListeners = 100;
const serverPort=$conf.server.port;

const app =express();
//导入前端静态文件
app.use('/',express.static(path.join(__dirname,"..",'dist')));


//对url进行解码
app.use(bodyParser.urlencoded({ extended: true }));
//转换mulitipart/form-data
app.use(formidable({encoding:'utf-8',multiples:true}));

app.use((req, res, next)=>{  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  console.log(req.session,req.cookies,req.originalUrl)
  return next();
});

//引入路由
app.all('*',router);

//必须加上此中间件，否则异步响应导致的临时404会中断程序
app.use((req,res,next)=>{
  const mate=`[${new Date()}] ${res.headersSent}\n`;
  console.log(mate+'\n');
});

//监听端口
app.listen(serverPort, function () {
  console.log('Example app listening at port:'+serverPort);
})