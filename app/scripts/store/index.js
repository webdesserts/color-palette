import { compose, createStore, applyMiddleware } from 'redux'

let middleware = []
let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore)
} else {
  const { devTools, persistState } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)
}

export default finalCreateStore
