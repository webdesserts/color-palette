import React from 'react'
import DOM from 'react-dom'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router';
import DiffLogMonitor from 'redux-devtools-diff-monitor'
import { DevTools } from 'redux-devtools/lib/react'

import Root from './root'
import configureStore from './store/configureStore'

let store = configureStore()
let history = createHistory()

syncReduxAndRouter(history, store)

DOM.render(<Root store={store} history={history}/>, document.getElementById('app'))

let devtools_wrapper = document.createElement('div')
devtools_wrapper.id = 'devtools-wrapper'

DOM.render(<DevTools store={store} monitor={DiffLogMonitor} visibleOnLoad={false} shortcut='ctrl+d'/>, devtools_wrapper)

document.body.appendChild(devtools_wrapper)
