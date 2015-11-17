import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
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
          </div>
        </Provider>
    )
  }
}
