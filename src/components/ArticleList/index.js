import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';
import ArticleItem  from '../ArticleItem';
import Pagination  from '../Pagination';

class ArticleList extends React.Component {
  componentDidMount(){
    if(this.props.articleList.list.length===0){
      this.props.getArticleList("all",1)
    } 
  }
  render() {
    const data = this.props.articleList;
    const list = data.list.map((item, index) =>
      <ArticleItem articleInfo={item} key={index} getArticleDetail={this.props.getArticleDetail} />
    );
    return (
      <div id="Article_list">
        {list}
        <Pagination
          getArticleList={this.props.getArticleList}
          type={data.category}
          pageNow={data.pageNow}
          pageNum={data.pageNum} />
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
      dispatch(actions.get_article_detail(pid));
    },
    getArticleList: (category, page) => {
      dispatch(actions.get_article_list(category, page));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);