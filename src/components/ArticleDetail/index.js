import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import CommentList from '../CommentList';
import { actions } from '../../actions';
import './style.css';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount(){
    if(this.props.article.pid!==undefined){
      this.props.getCommentList(this.props.article.pid);
    }
  }
  render() {
    const info = this.props.article;
    console.log(info);
    const date = new Date(info.date_utc);
    const detail = info.detail_md ? marked(info.detail_md, {
      renderer: new marked.Renderer(),
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
    }) : "loading";
    return (
      <div id="Article_detail" className="article_detail card">
        <div className="author_info">
          <span>{info.author}</span>
          <span>&nbsp;于&nbsp;</span>
          <span>{date.toLocaleString().slice(0, 10)}</span>
          <span>&nbsp;发表在&nbsp;</span>
          <span>{info.category}</span>
        </div>
        <div className="article_content">
          <h2 className="content_title">{info.title}</h2>
          <span className="article_text article_excerpt"
            dangerouslySetInnerHTML={{ __html: detail }}>
          </span><br />
        </div>
        <CommentList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.App.article
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticleDetail:(pid)=>{
      dispatch(actions.get_article_detail(pid));
    },
    getCommentList: (pid) => {
      dispatch(actions.get_comment_list(pid));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);