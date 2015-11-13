import React from 'react'
import DOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store/index'
import reducer from './store/reducers/index'
import Routes from './routes.jsx'

let store = createStore(reducer);

let app = (
  <Provider store={store}>
    <Routes />
  </Provider>
)

DOM.render(app, document.getElementById('app'));

if(process.env.NODE_ENV !== 'production'){
  const DiffLogMonitor = require('redux-devtools-diff-monitor');
  const { DevTools, DebugPanel } = require('redux-devtools/lib/react');

  const devtoolsContainer = document.createElement('div');

  const devtoolsComponent = (
    <DevTools store={store} monitor={DiffLogMonitor} shortcut='ctrl+d'/>
  );

  DOM.render(devtoolsComponent, devtoolsContainer);

  document.body.appendChild(devtoolsContainer);
}
