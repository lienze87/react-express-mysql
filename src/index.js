import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import './reset.css';
import Home from './containers/Home'
import Admin from './containers/Admin';


console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Admin/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

