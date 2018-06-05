import React from 'react';
import {connect} from 'react-redux';
import ContentList from '../contentList';
import Pagination from '../Pagination';
import {actions} from '../../actions';

class ArticleList extends React.Component{
  componentDidMount(){
    this.props.getArticleList(1);                                         
  }
  render(){
    const data=this.props.articleList;
    return(
      <div id="article_list">
        <ContentList 
        type="article"
        data={data} 
        getDetail={this.props.getArticleDetail} 
        delete={this.props.deleteArticle}
        update={this.props.updateArticle}
        />
        <Pagination 
        getList={this.props.getArticleList}
        type="admin/article"
        pageNow={data.pageNow}
        pageNum={data.pageNum}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articleList: state.App.articleList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticleDetail: (pid) => {
      dispatch(actions.admin_get_article_detail(pid));
    },
    updateArticle:(data)=>{
      dispatch(actions.update_article(data))
    },
    deleteArticle:(data)=>{
      dispatch(actions.delete_article(data));
    },
    getArticleList: (category,page) => {
      dispatch(actions.admin_get_article_list(category,page));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);