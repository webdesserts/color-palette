import { compose, createStore } from 'redux'
import { devTools, persistState } from 'redux-devtools';

let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore)
} else {
  finalCreateStore = compose(
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)
}

export default finalCreateStore
