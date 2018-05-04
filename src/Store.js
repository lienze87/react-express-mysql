import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer  from './reducer';

/**trunkMiddleware将拦截类型为函数的action，并传参(dispatch,getState,...)给此函数，然后调用
*函数原型如下
*function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}
*/
const middlewares=[thunkMiddleware];
/**必不能省略combinReducers
*HomeState将代称对应子reducer返回的state
*/
const reducer=combineReducers({
  App:Reducer
})
/** applyMiddleware()传参给中间件next函数，所以中间件的接受的参数为({ getState, dispatch }) => next => action
*compose()从右至左组合函数并返回最终函数,用于串接多个storeEnhancer
*middeware应作为最后一个参数,因为他需要优先执行
*/
const storeEnhancers=compose(applyMiddleware(...middlewares));


//createStore只能接受一个storeEnhancer
export default createStore(reducer,window.initState||{},storeEnhancers);