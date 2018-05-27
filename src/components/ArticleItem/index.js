import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import image from './user_head.jpg';

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("get_article_detail:" + this.props.articleInfo.pid);
    this.props.getArticleDetail(this.props.articleInfo.pid);
  }

  render() {
    const info = this.props.articleInfo;
    const date = new Date(info.date_utc);
    return (
      <div className="article_item card">
        <div className="author_info">
          <span className="author_info_user_image"><img src={image} alt="头像"/></span>
          <div className="author_info_content">
            <span>{info.author}</span>
            <span>&nbsp;于&nbsp;</span>
            <span>{date.toLocaleString().slice(0,10)}</span>
            <span>&nbsp;发表在&nbsp;</span>
            <span>{info.category}</span>
          </div>
        </div>
        <div className="article_content">
          <h2 className="content_title">{info.title}</h2>
          <span className="article_text article_excerpt"
        dangerouslySetInnerHTML={{ __html: info.excerpt }}>
        </span>
        </div>
        <div className="article_info">
          <span>阅读数(100)&nbsp;&nbsp;</span>
          <span>评论数({info.comment_count})&nbsp;&nbsp;</span>
          <span>分享&nbsp;&nbsp;</span>
          <button className="get_detail" onClick={this.handleClick}>
          <Link to={`/p/${info.pid}`}>阅读全文</Link></button>
        </div>
      </div>
    )
  }
}