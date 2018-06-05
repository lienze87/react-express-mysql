import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { translate } from '../../lib/translate';

function Row(props) {
  /**
   * atr为可枚举属性名数组，为序列化表单数据，需要给定适当的name
   */
  const atr = Object.keys(props.data);
  if (props.edit) {
    return atr.map((item, index) =>
      <td key={index}>
        <input type="text" name={item}
          className={['pid', 'id'].indexOf(item) !== -1 ? "form_item disabled" : "form_item"}
          autoComplete="off"
          defaultValue={props.data[item]} />
      </td>
    )
  } else {
    return atr.map((item, index) =>
      <td key={index}>{props.data[item]}</td>
    )
  }
}

function EditBar(props) {
  return (
    <td className="action_bar">
      <button className="btn" type="submit">提交</button>
      <button className="btn" onClick={props.handleCancel}>取消</button>
    </td>
  )
}

function ActionBar(props) {
  const item = props.item;
  const index = props.index;
  if (props.type.toString() === "article") {
    return (
      <td className="action_bar">
        <button className="btn" onClick={props.handleEdit} data-index={index}>修改</button>
        <button className="btn" onClick={props.handleDetail} data-id={item.pid}><Link to={`/admin/p/${item.pid}`} data-id={item.pid}>详情</Link></button>
        <button className="btn" onClick={props.handleDelete} data-id={item.pid}>删除</button>
      </td>
    )
  } else {
    return (
      <td className="action_bar">
        <button className="btn" onClick={props.handleEdit} data-index={index}>修改</button>
        <button className="btn" onClick={props.handleDelete} data-id={item.id}>删除</button>
      </td>
    )
  }
}


export default class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editID: 11 };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit(e) {
    e.preventDefault()
    console.log("handleEdit: " + e.target.dataset.index);
    this.setState({
      editID: parseInt(e.target.dataset.index, 10)
    })
  }

  /**
   * 表单提交时派发action
   */
  handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('edit');
    const formData = new FormData(form);
    console.log("update: " + formData.get('author'));
    this.props.update(formData);
    this.handleCancel(e);
  }

  handleDetail(e) {
    e.preventDefault();
    console.log("get_detail: " + e.target.dataset.id);
    this.props.getDetail(e.target.dataset.id);
  }

  handleDelete(e) {
    e.preventDefault();
    console.log("delete: " + e.target.dataset.id);
    const formData = new FormData();
    formData.append('id', `${e.target.dataset.id}`)
    this.props.delete(formData);
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      editID: 11
    })
  }
  render() {
    const data = this.props.data;
    if (data.list.length>0) {
      /** 
      *遍历属性名，生成table header
      *Object.keys()返回给定对象所有可枚举属性的字符串数组
      */
      const header = Object.keys(data.list[0]).map((item, index) =>
        <th key={index}>{translate(`${item}`)}</th>
      );

      const body = data.list.map((item, index) =>
        index === this.state.editID ?
          <tr key={index} >
            <td>{(index+1)}</td>
            <Row data={item} edit={true} />
            <EditBar handleCancel={this.handleCancel} />
          </tr> :
          <tr key={index}>
            <td>{(index+1)}</td>
            <Row data={item} edit={false} />
            <ActionBar
              item={item}
              type={this.props.type}
              index={index}
              edit={true}
              handleEdit={this.handleEdit}
              handleDetail={this.handleDetail}
              handleDelete={this.handleDelete}
              handleSubmit={this.handleSubmit}
            />
          </tr>
      )
      return (
        <div id="content_list">
          <form onSubmit={this.handleSubmit} id="edit" >
            <table className="table">
              <thead>
                <tr>
                  <th>序号</th>
                  {header}
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {body}
              </tbody>
            </table>
          </form>
        </div>
      )
    } else {
      return (
        <div id="content_list">
          <p className="card empty_list">未查询到有效信息</p>
        </div>
      )
    }
  }
} 