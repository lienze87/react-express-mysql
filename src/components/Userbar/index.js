import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import image from './user.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const user=document.getElementById('user').value;
    const password=document.getElementById('password').value;
    const formdata=new FormData();
    formdata.append('user',user);
    formdata.append('password',password);
    console.log("login:" + formdata);
    this.props.login(formdata);
  }

  render() {
    return (
      <div id="Userbar" className="card">
          <div className="input_container">
            <div className="input_wrapper">
              <input type="text" name="user" id="user" placeholder="请输入账号" />
            </div>
            <div className="error_mask hidden"></div>
          </div>
          <div className="input_container">
            <div className="input_wrapper">
              <input type="text" name="password" id="password" placeholder="请输入密码" />
            </div>
            <div className="error_mask hidden"></div>
          </div>
          <div className="login_options">
          </div>
          <button className="user_login" onClick={this.handleClick}>登陆</button>
      </div>
    )
  }
}

function Logind(props) {
  return (
    <div id="Userbar" className="card">
      <div className="user_avater">
        <img src={image} width="80" height="80" alt="头像" />
        <div className="user_info">
          <p>用户名称:{props.user.nickname}</p>
          <p>用户级别:{props.user.role}</p>
        </div>
      </div>
      <ul className="user_panel horizon_list">
        <li>收藏</li>
        <li>消息</li>
        <li>历史</li>
        <li><Link to={'/admin'}>管理</Link></li>
      </ul>
    </div>
  )
}


class Userbar extends React.Component {
  render() {
    const userInfo = this.props.user;
    if(userInfo.nickname!==undefined ){
      return (
      <Logind user={userInfo} />
    )}else{
    return (
      <Login login={this.props.login} />  
    )}
  }
}

function mapStateToProps(state) {
  return {
    user: state.App.user
  }
}


export default connect(
  mapStateToProps
)(Userbar);