import React from 'react';
import './simplemde.min.css';
import './style.css';
import { actions } from '../../actions';
import { connect } from 'react-redux';
import {initEditor} from '../../lib/initEditor';

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { simplemde: {}, };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const content_md = this.state.simplemde.value();
    const form = document.getElementById('article_add');
    const formData = new FormData(form);
    formData.append("author", "root");
    formData.append("detail_md", content_md);
    console.log("add-article:" + JSON.stringify(formData));
    this.props.addArticle(formData);
  }
  componentDidMount() {
    window.localStorage.clear();
    const editor=initEditor(document.getElementById('article_edictor'),'12357');
    this.setState({simplemde:editor});
  }
  render() {
    return (
      <div id="article_form" >
        <form action="#" id="article_add" onSubmit={this.handleSubmit}>
          <div className="atr_item" >
            <label htmlFor="article_category">类别</label>
            <input type="text" id="article_category" name="category" autoComplete="off" />
          </div>
          <div className="atr_item" >
            <label htmlFor="article_title">标题</label>
            <input type="text" id="article_title" name="title" autoComplete="off" />
          </div>
          <div className="atr_item" >
            <label htmlFor="article_filter_key">关键词</label>
            <input type="text" id="article_filter_key" name="filter_key"  autoComplete="off"/>
          </div>
          <div className="atr_content" >
            <label htmlFor="article_edictor">正文</label>
            <textarea id="article_edictor"></textarea>
          </div>
          <div className="article_submit">
            <button className="btn" type="submit">保存</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (data) => {
      dispatch(actions.add_article(data))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);