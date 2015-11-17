import React, { PropTypes, Component } from 'react'
import DiffLogMonitor from 'redux-devtools-diff-monitor'
import { Provider } from 'react-redux'
import { DevTools } from 'redux-devtools/lib/react'

import Routes from './routes/routes'

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  }

  render () {
    let { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Routes history={history}/>
          <DevTools store={store} monitor={DiffLogMonitor} visibleOnLoad={false} shortcut='ctrl+d'/>
        </div>
      </Provider>
    )
  }
}
