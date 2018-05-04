import React from 'react';
import marked from 'marked';
import {connect} from 'react-redux';
import {actions} from '../../actions';
import {translate} from '../../lib/translate';
import {initEditor} from '../../lib/initEditor';
import './style.css'


class ArticleDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={simplemde:{},};
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const content_md=this.state.simplemde.value();
    const content=marked(content_md,{
        renderer: new marked.Renderer(),
        gfm: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
      })
    console.log(content);
    const formData=new FormData(document.getElementById('article_update'))
    formData.append('detail_md',content_md);
    this.props.updateArticle(formData);
  }
  componentDidMount() {
    window.localStorage.clear();
    const editor=initEditor(document.getElementById('article_edictor'),'12357');
    this.setState({simplemde:editor});
    if(this.props.article.pid===undefined){
      this.props.getArticleDetail(this.props.params.pid);
    }
  }
  render(){
    const data=this.props.article;
    const content=Object.keys(data).map((item,index)=>{
          if(item!=="detail_md"){
            return (
            <div className = "atr_item" key={index}>
              <label htmlFor={`article_${item}`}>{translate(item)}</label> 
              <input type = "text" id={`article_${item}`} name = {item} autoComplete="off" defaultValue={data[item]}/>
            </div> 
            )
          }else{
            return (
              <div className = "atr_content" id="atr_content" key={index} >
              <label htmlFor="article_edictor">正文</label>
              <textarea id = "article_edictor" defaultValue={data.detail_md}></textarea> 
            </div>
            )
          }
        });
    return(
      <div id="article_detail" className="article_detail card">
      <form action="#" id="article_update">
        {content}
      <div className="article_submit">
        <button className="btn" onClick={this.handleSubmit}>保存</button>
      </div>  
      </form>
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
      dispatch(actions.get_article_detail(pid))
    },
    updateArticle:(data)=>{
      dispatch(actions.update_article(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);