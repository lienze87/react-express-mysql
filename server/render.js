import React from 'react';
import {renderToString} from 'react-dom/server';
import {match,RouterContext} from 'react-router';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import config from '../config/app';
import routes from '../src/containers/Home/routes';
import Reducer from '../src/reducer';

function renderFullPage(html, initialState) {
  return `
      <!doctype html>
      <html>
          <head>
              <title>我的个人网站</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
          </head>
          <body>
              <div id="root">${html}</div>
              <script>
                  window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
              </script>
              <script src="/js/vendor.js"></script><script src="/js/bundle.js"></script>
          </body>
      </html>
  `
}

const render = {
  handleRender: function (req, res, next) {

    const store = createStore(
      Reducer,
      applyMiddleware(thunkMiddleware)
    )

    match({routes,location: req.url
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).end('Internal Server Error');
      } else if (redirectLocation) {
        return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
      } else if (renderProps) {
        const html = renderToString( 
          <Provider store = {store} >
          <RouterContext { ...renderProps}/>  
          </Provider>
        )
        const initialState = store.getState()

        if (config.isDev) {
          res.set('Content-Type', 'text/html')
          return res.status(200).send(renderFullPage(html, initialState))
        } else {
          return res.render('index', {
            __html__: html,
            __state__: JSON.stringify(initialState)
          })
        }
      } else {
        res.status(404).end('Not found');
      }
    })
  }
}
module.exports=render