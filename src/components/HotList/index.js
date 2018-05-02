import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { actions } from '../../actions';
import './style.css';

class HotList extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(e.target.dataset.pid!==undefined){
      console.log("get_article_detail:" + e.target.dataset.pid);
      this.props.getArticleDetail(e.target.dataset.pid);
    }
  }
  render(){
    const data=this.props.hotList;
    const hotlist= data.list.map((item,index)=>
    <li key={index} data-pid={item.pid}>
    <Link to={`/p/${item.pid}`} data-pid={item.pid}>
        {item.title}
      </Link>
    </li>
  );
  return (
    <ul id="HotList" className="card" onClick={this.handleClick}>{hotlist}</ul>  
  )
  } 
}

function mapStateToProps(state){
  return {
    hotList:state.App.hotList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticleDetail: (pid) => {
      dispatch(actions.get_article_detail(pid));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotList);