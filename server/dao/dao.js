const $conf = require('../../config/app');
//连接mysql数据库
const mysql = require('mysql');
//使用连接池，提升性能
const pool = mysql.createPool($conf.mysql);
//返回DAO(data access object)数据库访问对象

  //关闭连接池
  //pool.end();
const dao=function(sql,key,next){
    pool.query(sql, key, next);
};
module.exports=dao;