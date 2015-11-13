import { compose, createStore, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

let middleware = []
let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    reduxReactRouter({ createHistory })
  )(createStore)
} else {
  const { devTools, persistState } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    reduxReactRouter({ createHistory }),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)
}

export default finalCreateStore
