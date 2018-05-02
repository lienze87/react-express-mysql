const $sql = require('../mapper/Mapper');
const dao = require('../dao/dao');
const units = require('../unit/units');

module.exports = {
  get_comment_list: function (req, res) {
    //对页码进行整数转换
    const pid = +req.params.pid||100000;

    const sql = $sql.comment.queryByPid;

/** 
    //获取评论的子列表
    function get_child_list(list, parent, index) {
      //数组浅复制,去除原始数组中的元素自身
      const arr = [].concat(list.slice(0, index), list.slice(index));
      //添加child属性并填充数据
      parent.child = arr.filter((item) => item.parent_id === parent.id);
      return parent;
    }
*/

    dao(sql, pid, function (err, result) {
      console.log(err);
/** 
*      let list = Array.from(result) || [];
*      //获取重新组装后的列表
*      let arr = list.map((item, index) =>get_child_list(list, item, index))
*          .filter(item =>item.parent_id === 10000);
*/          
      //拼接json数据
      let data = {
        count: result.length,
        pid:pid,
        list: Array.from(result) || []
      };
      res.json(data);
    });
  },
  add_comment: function (req, res) {
    const body = req.fields;

    const date_utc = units.dateFormat();
    const date_modify = units.dateFormat();

    const sql = $sql.comment.insert;

    const comment = {
      pid: +body.pid,
      author: body.author,
      receiver: body.receiver,
      date_utc: date_utc,
      content: body.content,
      parent_id: body.parent_id,
      date_modify: date_modify
    };

    const value = Object.keys(comment).map(item => comment[item]);

    dao(sql, value, function (err, result) {
      console.log(err);
      res.json({
        code: 1326,
        message: "添加成功"
      })
    })
  },
}