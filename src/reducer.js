import { actionType } from './actionType';

const initState = {
  message: "welcome your visit!",
  user: {},
  categoryList: {
    count: 1,
    pageNow: 1,
    pageNum: 1,
    list: [{
        id: 1,
        name: 'poetry',
        count: 4,
        note: '诗歌'
      },
      {
        id: 2,
        name: 'html',
        count: 1,
        note: 'HTML'
      },
      {
        id: 3,
        name: 'CSS',
        count: 0,
        note: '诗歌'
      },
      {
        id: 4,
        name: 'React',
        count: 0,
        note: '诗歌'
      }
    ]
  },
  articleList: {
    category: "all",
    count: 1,
    pageNow: 1,
    pageNum: 1,
    list: []
  },
  article: {},
  commentList: {
    count: 0,
    list: []
  },
  userList: {
    cout: 2,
    pageNow: 1,
    pageNum: 1,
    list: []
  },
  hotList: {
    count: 4,
    list: [{
        pid: 182537,
        title: "青春"
      },
      {
        pid: 187624,
        title: "错误"
      },
      {
        pid: 186594,
        title: "古乐府"
      },
      {
        pid: 152684,
        title: "面朝大海，春暖花开"
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
    case actionType.SET_COMMENT_LIST:{
      return {...state,commentList:action.data}
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