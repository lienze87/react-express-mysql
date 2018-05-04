import { actionType } from './actionType';
import { ajax } from './lib/ajax';

export const actions = {
  get_search_key: function (key = "") {
    return (dispatch) => {
      const url = `/search/${key}`;
      function callback(res, status) {
        dispatch(actions.set_search_result(res));
      };
      ajax("GET", url, "", callback);
    }
  },
  get_category_list: function (page = 1) {
    return (dispatch) => {
      const url = `/category/${page}`;
      ajax("GET", url, "", (res, status) => {
        dispatch(actions.set_category_list(res))
      })
    }
  },
  get_article_list: function (category = "all", page = 1) {
    return (dispatch) => {
      const url = `/${category}/${page}`;
      function callback(res, status) {
        dispatch(actions.set_article_list(res));
      };
      ajax("GET", url, "", callback);
    }
  },
  admin_get_article_list: function (page = 1) {
    return (dispatch) => {
      const url = `/admin/article/${page}`;
      ajax("GET", url, "", (res, status) => {
        if(res.code!==undefined){
          dispatch(actions.set_message(res.message))
        }else{
          dispatch(actions.set_article_list(res))
        }
      })
    }
  },
  get_article_detail: function (pid = "") {
    return (dispatch) => {
      const url = `/p/${pid}`;
      function callback(res, status) {
        dispatch(actions.set_article_detail(res));
        dispatch(actions.get_comment_list(pid));
      };
      ajax("GET", url, "", callback);
    }
  },
  add_article: function (data) {
    return (dispatch) => {
      const url = `/admin/article/add`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  update_article: function (data) {
    return (dispatch) => {
      const url = `/admin/article/update`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  delete_article: function (data) {
    return (dispatch) => {
      const url = `/admin/article/delete`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  get_comment_list: function (pid = "") {
    return (dispatch) => {
      const url = `/comment/${pid}`;
      ajax("GET", url, "", (data, status) => {
        dispatch(actions.set_comment_list(data))
      })
    }
  },
  add_comment: function (data) {
    return (dispatch) => {
      const url = `/comment/add`;
      ajax("POST", url, data, (data, status) => {
        dispatch(actions.set_message(data.message))
      })
    }
  },
  login: function (fromdata) {
    return (dispatch) => {
      const url = "/login";
      function callback(data, status) {
        if (data.code !== undefined) {
          dispatch(actions.set_message(data.message))
        } else {
          dispatch(actions.set_user_info(data));
        }
      };
      ajax("POST", url, fromdata, callback);
    }
  },
  get_user_list: function (page = 1) {
    return (dispatch) => {
      const url = `/admin/user/${page}`;
      ajax("GET", url, "", (res, status) => {
        dispatch(actions.set_user_list(res))
      })
    }
  },
  add_user: function (data) {
    return (dispatch) => {
      const url = `/admin/user/add`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  update_user: function (data) {
    return (dispatch) => {
      const url = `/admin/user/update`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  delete_user: function (data) {
    return (dispatch) => {
      const url = `/admin/user/delete`;
      ajax("POST", url, data, (res, status) => {
        dispatch(actions.set_message(res.message))
      })
    }
  },
  admin_get_category_list:function(page=1){
    return (dispatch)=>{
      const url=`/admin/category/${page}`;
      ajax("GET",url,"",(res,status)=>{
        dispatch(actions.set_category_list(res))
      })
    }
  },
  set_search_result: function (data) {
    return {
      type: actionType.SET_SEARCH_RESULT,
      data
    }
  },
  set_article_list: function (data) {
    return {
      type: actionType.SET_ARTICLE_LIST,
      data
    }
  },
  set_article_detail: function (data) {
    return {
      type: actionType.SET_ARTICLE_DETAIL,
      data
    }
  },

  set_comment_list: function (data) {
    return {
      type: actionType.SET_COMMENT_LIST,
      data
    }
  },

  set_user_info: function (data) {
    return {
      type: actionType.SET_USER_INFO,
      data
    }
  },
  set_user_list: function (data) {
    return {
      type: actionType.SET_USER_LIST,
      data
    }
  },
  set_category_list: function (data) {
    return {
      type: actionType.SET_CATEGORY_LIST,
      data
    }
  },
  set_message: function (msg) {
    return {
      type: actionType.SET_MESSAGE,
      msg
    }
  },
}