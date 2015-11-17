import { combineReducers } from 'redux'
import palettes from './palettes/reducers'
import { routeReducer } from 'redux-simple-router'

export default combineReducers({
  routing: routeReducer,
  palettes
})
