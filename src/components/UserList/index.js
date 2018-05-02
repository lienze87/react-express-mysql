import React from 'react';
import { connect } from 'react-redux';
import ContentList from '../contentList';
import Pagination from '../Pagination';
import { actions } from '../../actions';

class UserList extends React.Component {
  render() {
    const data = this.props.UserList;
    return (
      <div id="User_list">
        <ContentList
          type={"user"}
          data={data}
          delete={this.props.deleteUser}
          update={this.props.updateUser}
        />
        <Pagination
          getList={this.props.getUserList}
          type={"admin/user"}
          pageNow={data.pageNow}
          pageNum={data.pageNum}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    UserList: state.App.userList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (data) => {
      dispatch(actions.update_user(data))
    },
    deleteUser: (data) => {
      dispatch(actions.delete_user(data));
    },
    getUserList: (page) => {
      dispatch(actions.get_user_list(page));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);