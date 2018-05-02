import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './style.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log("get_article_list:" + e.target.dataset.category);
    this.props.getArticleList(e.target.dataset.category,1);
  }
  render() {
    const data = this.props.categoryList;
    const category = data.list.map((item, index) =>
      <li key={index}>
      <Link to={`/${item.name}`} data-category={item.name}>{item.name}</Link>
      </li>
    )
    return (
      <ul id="Navbar" className="horizon_list card" onClick={this.handleClick}>
        {category}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    categoryList:state.App.categoryList
  }
}


export default connect(
  mapStateToProps
)(Navbar);