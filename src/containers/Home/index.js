import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Message from '../../components/Message';
import SearchBar from '../../components/SearchBar';
import Navbar from '../../components/Navbar';
import ArticleList from '../../components/ArticleList';
import ArticleDetail from '../../components/ArticleDetail';
import NotFound from '../../components/NotFound';
import Userbar from '../../components/Userbar';
import HotList from '../../components/HotList';

import { actions } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.App);
  }
  render() {
    const url=this.props.match;
    console.log(url);
    return (
      <Router>
        <div id="home">
          <Message />
          <div id="header" className="card">
            <span className="logo"></span>
            <SearchBar getSearchKey={this.props.getSearchKey} />
          </div>
          <div id="main">
            <Navbar getArticleList={this.props.getArticleList} />
            <div id="content">
            <Switch>
              <Route path={`/`} static exact component={ArticleList}/>
              <Route path={`/p/:pid`} component={ArticleDetail}/>
              <Route path={`/:category`} component={ArticleList}/>
              <Route component={NotFound}/> 
            </Switch>
            </div>
            <div id="sidebar">
              <Userbar login={this.props.login} />
              <HotList />
            </div>
          </div>
          <div id="footer" className="card">
            <span>自豪的使用React!</span>
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    App: state.App
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchKey: (key) => {
      dispatch(actions.get_search_key(key));
    },
    getArticleList: (category, page) => {
      dispatch(actions.get_article_list(category, page));
    },
    login: (formdata) => {
      dispatch(actions.login(formdata));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);