const $sql = require('../mapper/Mapper');
const $conf = require('../../config/app');
const dao = require('../dao/dao');

//向前端返回JSON格式的数据
module.exports = {
  get_category_list: function (req, res) {
    const page = +req.params.page || 1;

    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.category.query;
    const key = [start, end];

    dao(sql, key,function(err, result){
      if(err){
        console.log(err||'no error!');
       return res.json({code:1000,message:'发生错误'})
      }else{
      //拼接json数据
      let data = {
        count:result.length,
        pageNum:3,
        pageNow:page,
        list: Array.from(result) || []
      };
      console.log(res.headersSent);
      return res.json(data);
      }
    });
  }
}