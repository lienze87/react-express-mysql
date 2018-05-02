import React from 'react';

function ArticleItem(props){
  const item=props.item;
  const index=props.index;
  console.log(props);
  if(props.edit===true){
    return (
      <tr>
      <td><input type="text" name="index" value={index}/></td>
      <td><input type="text" name="pid" value={item.pid}/></td>
      <td><input type="text" name="author" value={item.author}/></td>
      <td><input type="text" name="date" disabled value={(new Date(item.date_utc)).toLocaleString()}/></td>
      <td><input type="text" name="title" value={item.title}/></td>
      <td><input type="text" name="category" value={item.category}/></td>
      <td><input type="text" name="status" value={item.status}/></td>
      <td><input type="text" name="comment_status" value={item.comment_status}/></td>
      <td><input type="text" name="comment_count" value={item.comment_count}/></td>
      <td><input type="text" name="filter_key" value={item.filter_key}/></td>
      <td>
        <button>提交</button>
        <button>取消</button>
      </td>
    </tr>
    )
  }else{
  return (
    <tr>
    <td>{index}</td>
    <td>{item.pid}</td>
    <td>{item.author}</td>
    <td>{(new Date(item.date_utc)).toLocaleString()}</td>
    <td>{item.title}</td>
    <td>{item.category}</td>
    <td>{item.status}</td>
    <td>{item.comment_status}</td>
    <td>{item.comment_count}</td>
    <td>{item.filter_key}</td>
    <td>
      <button>详情</button>
      <button>修改</button>
      <button>删除</button>
    </td>
  </tr>
  )
  }
}



export default class ArticleList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      editID:0
    }
  }
  render() {
    const data = this.props.articleList;
    if(data.list.length===0){
      this.props.getArticleList(data.category,1);
    }
    const list = data.list.map((item, index) =>
      this.state.editID===index?<ArticleItem  item={item} key={index} index={index} edit={true}/>:
      <ArticleItem  item={item} key={index} index={index} edit={false}/>
    );
    return (
      <div id="Article_list">
        <table className="article_List" border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>pid</th>
            <th>作者</th>
            <th>发布时间</th>
            <th>标题</th>
            <th>分类</th>
            <th>文章状态</th>
            <th>评论状态</th>
            <th>评论数</th>
            <th>关键词</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
        </table>
      </div>
    )
  }
}

/*
* 
function mapStateToProps(state) {
  return {
    articleList: state.Admin.articleList
  }
}

function mapDispatchToProps(dispatch) {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
*/