import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import './reset.css';
import Home from './containers/Home';
import Admin from './containers/Admin';


console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route  path="/admin" component={Admin}/>  
        <Route  component={Home}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

