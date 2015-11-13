import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router';

import palettes from './palettes'

const reducer = combineReducers({
  palettes,
  router: routerStateReducer
})

export default reducer