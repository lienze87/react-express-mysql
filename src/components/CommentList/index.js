import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';
import './style.css';

function CommentItem(props) {
  const date=new Date(props.data.date_utc);
  return (
    <div className="card comment_item">
      <div className="comment_item_header">
       <div className="comment_user_info">
      {props.data.author}&nbsp;回复&nbsp;{props.data.receiver}
      </div>
      <div className="comment_date">发表于{date.toLocaleString()}</div>
      </div>
      <div className="comment_content">
      <p>{props.data.content}</p></div>
      <div className="comment_bar">
        <Editor 
         index={props.index}
          key={props.index}
          edit={props.edit}
          pid={props.data.pid}
          receiver={props.data.author}
          parent_id={props.data.id}
          addComment={props.addComment}
          handleEdit={props.handleEdit}
          handleCancle={props.handleCancle}
        />
      </div>
    </div>
  )
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const content = document.querySelector('.comment_editor_textarea').value;
    const formData = new FormData();
    formData.append('author', 'root');
    formData.append('pid', this.props.pid);
    formData.append('receiver', this.props.receiver);
    formData.append('content', content);
    formData.append('parent_id', this.props.parent_id);
    console.log('add_comment: ' + content);
    this.props.addComment(formData);
    this.props.handleCancle();
  }
  render() {
    if (this.props.edit) {
      return (
        <div className="card comment_editor">
          <textarea name="comment" className="comment_editor_textarea" placeholder="写下你的评论"></textarea>
          <button className="comment_submit btn_plain" onClick={this.handleSubmit}>提交</button>
        </div>
      )
    } else {
      return (
        <button className="comment_add btn_plain" data-index={this.props.index} onClick={this.props.handleEdit}>创建回复</button>
      )
    }
  }

}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editID: 1000 };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancle = this.handleCancle.bind(this);
  }
  handleEdit(e) {
    console.log("handleEdit: " + e.target.dataset.index);
    this.setState({
      editID: parseInt(e.target.dataset.index, 10)
    })
  }
  handleCancle(e) {
    document.querySelector('.comment_editor_textarea').value='';
    this.setState({
      editID: 1000
    })
  }

  render() {
    const data = this.props.commentList;
    let list;
    if(data.list.length!==0){
      list = data.list.map((item, index) =>
      index === this.state.editID ?
        <CommentItem
        index={index} 
        edit={true} 
        key={index} 
        data={item} 
        addComment={this.props.addComment}
        handleEdit={this.handleEdit}
        handleCancle={this.handleCancle}
        />
        :
        <CommentItem 
        index={index}
        edit={false} 
        key={index} 
        data={item} 
        addComment={this.props.addComment} 
        handleEdit={this.handleEdit}
        handleCancle={this.handleCancle}
        />
    )
  }
    return (
      <div id="comment_list">
        <p>共有{data.count}条评论</p>
        {list}
        <Editor edit={true}
          pid={data.pid}
          receiver={'theme'}
          parent_id={data.pid}
          addComment={this.props.addComment} 
          handleEdit={this.handleEdit}
          handleCancle={this.handleCancle}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article:state.App.article,
    commentList: state.App.commentList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (data) => {
      dispatch(actions.add_comment(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);