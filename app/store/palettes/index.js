import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import palettes from './reducers'

const reducer = combineReducers({
  palettes,
  routing: routeReducer
})

export default reducer