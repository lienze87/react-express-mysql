const $sql = require('../mapper/Mapper');
const $conf = require('../../config/app');
const dao = require('../dao/dao');
const units = require('../unit/units');
const marked = require('marked');

//向前端返回JSON格式的数据
module.exports = {
  get_article_list_all: function (req, res) {
    //对页码进行整数转换
    const page = +req.params.page || 1;

    //获得当前页起始ID与结束ID
    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.article.queryAll;
    const key = [start, end];

    dao(sql, key, function (err, result) {
      console.log(err);
      if(err){
       return res.json({code:1000,message:'发生错误'})
      }else{
          //拼接json数据
        let data = {
          category: "all",
          pageNum: 4,
          pageNow: page,
          list: Array.from(result)||[]
        };
        res.json(data);
      }
    });
  },
  get_article_list_category: function (req, res) {
    //获取文章类型参数
    const type = req.params.category;
    //对页码进行整数转换
    const page = +req.params.page || 1;
    //获得当前页起始ID与结束ID
    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.article.queryByType;
    const key = [type, start, end];

    dao(sql, key, function (err, result) {
      console.log(err);
      if(err){
        return  res.json({code:1001,message:"查询分类列表错误"})
      }else{
        let data = {
          category: type,
          pageNum: 4,
          pageNow: page,
          list: Array.from(result)||[]
        };
      res.json(data);
      }
    });

  },
  get_article_detail: function (req, res) {
    //id为整数型，使用正数操作符进行转换
    const pid = +req.params.pid;

    const sql = $sql.article.queryById;

    dao(sql, pid, function (err, result) {
      console.log(err);
      res.json(result[0]?result[0]:{code:1005,message:"查询错误"});
    });
  },
  get_article_list_admin: function (req, res) {
    //对页码进行整数转换
    const page = +req.params.page || 1;

    //获得当前页起始ID与结束ID
    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.article.adminQueryList;
    const key = [start, end];

    dao(sql, key, function (err, result) {
      console.log(err);
      //拼接json数据
      let data = {
        category: "all",
        pageNum: 3,
        pageNow: page,
        list: Array.from(result)||[]
      };
      res.json(data);
    });

  },
  add_article: function (req, res) {
    console.log('前端req body');
    console.log(req.fields);
    const body=req.fields;
    /**
     * 补充表单字段并给初值
     */
    const pid =Math.ceil(Math.random() * 10000 + 100000);
    const date_utc = units.dateFormat();
    const date_modify=units.dateFormat();       
    const detail_md = body.detail_md||'';
    const detail = marked(detail_md, {
      renderer: new marked.Renderer(),
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
    });
    const excerpt = detail.substring(0, 60);
    
    const sql = $sql.article.insert;

    /**
     * data为暂存表单对象，字段顺序需要调整
     * article为调整字段顺序后的表单对象,并再次补充缺省值
     * 此处可以将article优化为构造函数
     */
    const data = {...body,pid,date_utc,date_modify,detail,excerpt};
    console.log('req.body拼接结果');
    console.log(data);
    /**
     * 数据库模型对象article
     */
    const article={
      pid:100000,
      author:'',
      date_utc:'',
      date_modify:'',
      title:'',
      detail:'',
      detail_md:'',
      excerpt:'',
      category:'',
      link_num:0,
      status:'open',
      comment_status:'open',
      comment_count:0,
      filter_key:''
    };
    Object.keys(data).map((item)=>article[item]=data[item]);
    const value= Object.keys(article).map((item)=>article[item]);
    console.log('数据库存储数组对象');
    console.log(value);
    dao(sql,value, function (err, result) {
      console.log(err);
      res.json({
        code: 1026,
        message: "添加成功"
      })
    })
  },
  update_article: function (req, res) {
    console.log('前端req body');
    console.log(req.fields);
    /**
     * req.fileds为转换后的form-data对象
     */
    const body = req.fields;
    const pid = +body.pid;
    const date_modify = units.dateFormat(); 
    /**
     * 自动添加date_modify字段
     */
    const article={date_modify};
    const fieldArr=['author','date_utc','category',
      'title','detail_md','detail','except','date_modify','comment_status'];
    /**
     * 过滤掉本次不需要更新的属性，并进行相应键值映射
     */
    fieldArr.filter((item,index)=>body[item]!==undefined).map((item,index)=>article[item]=body[item]);
    if(body['detail_md']!==undefined){
      const detail = marked(body['detail_md'], {
        renderer: new marked.Renderer(),
        gfm: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
      });
      const excerpt = detail.substring(0, 60);
      article.detail=detail;
      article.excerpt=excerpt;
    }
    const sql = $sql.article.update;
    console.log('数据库更新对象');
    console.log(article);

    dao(sql,[article,pid], function (err, result) {
      console.log(err);
      res.json({
        code: 1028,
        message: "更新成功"
      })
    })
  },
  delete_article: function (req, res) {
    const pid = +req.fields.id;
    const sql = $sql.article.delete;
    dao(sql, pid, function (err, result) {
      console.log(err);
      res.json({
        code: 1030,
        message: "删除成功"
      })
    })
  }
}
