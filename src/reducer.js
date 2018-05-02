import { actionType } from './actionType';

const initState = {
  message: "welcome your visit!",
  user: {},
  categoryList: {
    count: 4,
    pageNow: 1,
    pageNum: 2,
    list: [{
      id: 1,
      name: "poetry",
      count: 4,
      note: "诗歌"
    }, {
      id: 3,
      name: "poetry",
      count: 4,
      note: "诗歌"
    }, {
      id: 5,
      name: "poetry",
      count: 4,
      note: "诗歌"
    }
    ]
  },
  articleList: {
    category: "all",
    count: 2,
    pageNow: 1,
    pageNum: 3,
    list: []
  },
  article: {},
  commentList: {
    count: 3,
    pid: 182537,
    list: [
      {
        id: 1,
        pid: 182537,
        author: "root",
        receiver: "theme",
        date_utc: "2018-09-18T10:20:10",
        content: "这是一条评论,这条评论会非常的长......这是一条评论,这条评论会非常的长......这是一条评论,这条评论会非常的长......这是一条评论,这条评论会非常的长......这是一条评论,这条评论会非常的长......",
        parent_id: '',
      }, {
        id: 2,
        pid: 182537,
        author: "user",
        receiver: "root",
        date_utc: "2018-09-18T12:20:10",
        content: "这是第二条评论",
        parent_id: 1
      }, {
        id: 3,
        pid: 182537,
        author: "user1",
        receiver: "theme",
        date_utc: "2018-09-18T18:20:10",
        content: "这是第三条评论",
        parent_id: ''
      }
    ]
  },
  userList: {
    cout: 2,
    pageNow: 1,
    pageNum: 2,
    list: [{
      id: 1,
      role: "admin",
      name: "root",
      nickname: "管理员",
      email: "12345@qq.com"
    }, {
      id: 2,
      role: "admin",
      name: "root",
      nickname: "管理员",
      email: "12345@qq.com"
    }]
  },
  hotList: {
    count: 4,
    list: [
      {
      pid: 182537,
        title: "青春"
      },
      {
        pid: 187624,
        title: "错误"
      },
      {
        pid:186594,
        title:"古乐府"
      },
      {
        pid:152684,
        title:"面朝大海，春暖花开"
      }
    ]
  }
}

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case actionType.SET_SEARCH_RESULT: {
      return { ...state, articleList: action.data }
    }
    case actionType.SET_ARTICLE_LIST: {
      return { ...state, articleList: action.data }
    }
    case actionType.SET_ARTICLE_DETAIL: {
      return { ...state, article: action.data }
    }
    case actionType.SET_USER_INFO: {
      return { ...state, user: action.data }
    }
    case actionType.SET_USER_LIST: {
      return { ...state, userList: action.data }
    }
    case actionType.SET_CATEGORY_LIST: {
      return { ...state, categoryList: action.data }
    }
    case actionType.SET_MESSAGE: {
      return { ...state, message: action.data }
    }
    default:
      return state;
  }
}