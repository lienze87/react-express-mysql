const express = require('express');
const path=require('path');
const $conf = require('../config/app');
const bodyParser = require('body-parser');
const formidable=require('express-formidable');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');
const config=require('../config/webpack.config.prod');
const compiler=webpack(config);

const serverPort=$conf.server.port;


const app =express();

//app.use('/',express.static(path.join(__dirname,"..",'dist')));
//将webpack处理后的index.html文件传递给server
app.use( webpackDevMiddleware(compiler, {
 publicPath:'/'
 }));

//对url进行解码
app.use(bodyParser.urlencoded({ extended: true }));
//转换mulitipart/form-data
app.use(formidable({encoding:'utf-8',multiples:true}));

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type=application/jsoncharset=UTF-8')
  console.log(req.originalUrl);
});

//引入路由
app.use('/',require('./routes/home'));
app.use('/admin',require('./routes/admin'));
//监听端口
app.listen(serverPort, function () {
  console.log('Example app listening at port:'+serverPort);
})