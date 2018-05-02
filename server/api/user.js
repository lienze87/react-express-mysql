const $sql = require('../mapper/Mapper');
const $conf = require('../../config/app');
const dao = require('../dao/dao');
const units = require('../unit/units');

//向前端返回JSON格式的数据
module.exports = {
  login: function (req, res) {
    console.log(req.fields);
    //转换为字符串，有待改进
    const name = `${req.fields.user}`;
    const pwd = `${req.fields.password}`;

    const sql = $sql.user.queryByName;
    const key = [name];
    dao(sql, key, function (err, result) {
      console.log(err);
      if (result[0]) {
        if (result[0].password === pwd) {
          let user = result[0];
          let data = {
            id: user.id,
            role: user.role,
            nickname: user.nickname,
            token: 23456
          };
          res.json(data);
        } else {
          res.json({
            code: 1004,
            message: '密码错误'
          })
        }
      } else {
        res.json({
          code: 1003,
          message: '账户错误'
        })
      }
    })
  },
  get_user_list: function (req, res) {
    const page = +req.params.page || 1;

    const start = (page - 1) * $conf.pageStep;
    const end = page * $conf.pageStep;

    const sql = $sql.user.adminQueryList;
    const key = [start, end];

    dao(sql, key, function (err, result) {
      console.log(err);
      //拼接json数据
      let data = {
        pageNum: 2,
        pageNow: page,
        list: Array.from(result) || []
      };
      res.json(data);
    });
  },
  add_user: function (req, res) {
    const body = req.fields;
    const user = {
      role: 'user',
      name: body.name,
      password: body.password,
      nickname: body.nickname,
      email: body.email,
      date_register: units.dateFormat(),
      date_modfiy: units.dateFormat(),
      status: 'open'
    };
    const sql = $sql.user.insert;
    const value = Object.keys(user).map((item) => user[item]);
    dao(sql, value, function (err, result) {
      console.log(err);
      res.json({
        code: 1136,
        message: "添加成功"
      })
    })
  },
  update_user: function (req, res) {
    const body = req.fields;
    const id = +body.id;
    const sql = $sql.user.update;
    const user = {
      date_modify: units.dateFormat()
    };
    Object.keys(body).filter(item => item !== `id`).map(item => user[item] = body[item])
    dao(sql, [user, id], function (err, result) {
      console.log(err);
      res.json({
        code: 1128,
        message: "更新成功"
      })
    })
  },
  delete_user: function (req, res) {
    const id = +req.fields.id;
    const sql = $sql.user.delete;
    dao(sql, id, function (err, result) {
      console.log(err);
      res.json({
        code: 1130,
        message: "删除成功"
      })
    })
  }
}