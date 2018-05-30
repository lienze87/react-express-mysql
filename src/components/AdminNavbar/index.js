import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Navbar extends React.Component{
  render(){
    return (
        <ul className="navbar">
          <li>
            <Link to='/admin'>访问统计</Link>
          </li>
          <li>
            <Link to='/admin/user'>用户管理</Link>
          </li>
          <li>
            <Link to='/admin/article' >文章管理</Link>
          </li>
          <li>
              <Link to='/admin/article/add'>添加文章</Link>
          </li>
          <li>
            <Link to='/admin/category'>分类管理</Link>
          </li>
        </ul>
    )
  }
}