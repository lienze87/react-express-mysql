import React from 'react';
import {connect} from 'react-redux';
import ContentList from '../contentList';
import Pagination from '../Pagination';
import {actions} from '../../actions';

class CategoryList extends React.Component{
  componentDidMount(){
    if(this.props.categoryList.list.length===0){
      this.props.getCategoryList(1);
    }
  }
  render(){
    const data=this.props.categoryList;
    return(
      <div id="category_list">
        <ContentList 
        type={"category"}
        data={data}  
        delete={this.props.deleteCategory}
        update={this.props.updateCategory}
        />
        <Pagination 
        getList={this.props.getCategoryList}
        type={"admin/category"}
        pageNow={data.pageNow}
        pageNum={data.pageNum}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.App.categoryList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCategory:(data)=>{
      dispatch(actions.update_category(data))
    },
    deleteCategory:(data)=>{
      dispatch(actions.delete_category(data));
    },
    getCategoryList: (page) => {
      dispatch(actions.admin_get_category_list( page));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);