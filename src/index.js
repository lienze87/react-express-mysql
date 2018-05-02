import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Home from './containers/Home'
import Admin from './containers/Admin';
import './reset.css';

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/"  component={Home}></Route>
        <Route path="/admin" except component={Admin}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

