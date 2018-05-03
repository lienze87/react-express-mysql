import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/AdminNavbar';
import Welcome from '../../components/Welcome';
import Message from '../../components/Message';
import AdminArticleList from '../../components/AdminArticleList';
import AdminArticleDetail from '../../components/AdminArticleDetail';
import AddArticle from '../../components/AddArticle';
import CategoryList from '../../components/CategoryList';
import UserList from '../../components/UserList';
import NotFound from '../../components/NotFound';
import './style.css';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Router>
        <div id="admin">
          <Message />
          <div id="header" className="card">welcome your visit!</div>
          <div id="main" className="card">
            <div id="navbar" className="card">
              <Navbar />
            </div>
            <div id="content" className="card">
              <Switch>
                <Route path="/admin" exact component={Welcome} />
                <Route path='/admin/article/add' exact component={AddArticle} />
                <Route path='/admin/article' component={AdminArticleList} />
                <Route path='/admin/p/:pid' component={AdminArticleDetail} />
                <Route path='/admin/user' component={UserList} />
                <Route path='/admin/category' component={CategoryList} />
                <Route path="*" component={NotFound} />
              </Switch>
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