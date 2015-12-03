import React from 'react'
import DOM from 'react-dom'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router';

import Root from './root'
import configureStore from './store/configureStore'

let store = configureStore()
let history = createHistory()

syncReduxAndRouter(history, store)

DOM.render(<Root store={store} history={history}/>, document.getElementById('app'))
