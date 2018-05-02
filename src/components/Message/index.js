import React from 'react';
import './style.css';
import { connect } from 'react-redux';

class Notice extends React.Component {
  //添加局部状态state，每个组件的state是独立的
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.changeVisibility = this.changeVisibility.bind(this);
  }
  //3s后关闭全局消息
  changeVisibility() {
    this.setState({ isShow: true });
    return setTimeout(() => {
      this.setState({ isShow: false });
    }, 3000)
  }

  //props改变时触发
  componentWillReceiveProps(){
    this.changeVisibility();
  }

  render() {
    if (this.state.isShow) {
      return (
        <div className="Message_Notice">
          <div className="Notice_content">
            <span>{this.props.msg}</span>
          </div>
        </div>
      )
    } else {
      return "";
    }
  }
}

 class Message extends React.Component {
  render() {
    const msg=this.props.message;
    return (
      <div id="Message">
        <span>
          <Notice msg={msg} />
        </span>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    message: state.App.message
  }
}

export default connect(
  mapStateToProps
)(Message);