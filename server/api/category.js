const $sql = require("../mapper/Mapper");
const $conf = require("../../config/app");
const dao = require("../dao/dao");
const utils = require("../utils");

//向前端返回JSON格式的数据
module.exports = {
  get_category_list: function (req, res) {
    const page = +req.params.page || 1;

    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.category.query;
    const key = [start, end];

    dao(sql, key, function (err, result) {
      console.log(err || "get category list no error!");
      if (err) {
        return res.json({ code: 1000, message: "发生错误" });
      } else {
        //拼接json数据
        let data = {
          count: result.length,
          pageNum: 1,
          pageNow: page,
          list: Array.from(result) || [],
        };
        res.json(data);
        console.log(Date.now());
      }
    });
  },
  update_category: function (req, res) {
    const body = req.fields;
    const id = +body.id;
    const sql = $sql.category.update;
    const category = {
      date_modify: utils.dateFormat(),
    };
    Object.keys(body)
      .filter((item) => item !== `id`)
      .map((item) => (category[item] = body[item]));
    dao(sql, [category, id], function (err, result) {
      console.log(err || "update category no error!");
      res.json({
        code: 1228,
        message: "更新成功",
      });
    });
  },
  delete_category: function (req, res) {
    const id = +req.fields.id;
    const sql = $sql.category.delete;
    dao(sql, id, function (err, result) {
      console.log(err || "delete category no error!");
      res.json({
        code: 1230,
        message: "删除成功",
      });
    });
  },
};
