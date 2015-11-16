import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import palettes from './palettes'

const reducer = combineReducers({
  palettes,
  routing: routeReducer
})

export default reducer