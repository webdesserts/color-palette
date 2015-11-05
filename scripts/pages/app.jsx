import React from 'react'
import { Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { PaletteReducers } from '../reducers.js'

let store = createStore(PaletteReducers);

export default function App ({children}) {
    return (
      <Provider store={store}>
        <div className="content">
          <header>
            <Link to="/palettes" activeClassName="active">Palettes</Link>
            <Link to="/about" activeClassName="active">About</Link>
            <h1>Palette Editor</h1>
          </header>
          <main>
            {children}
          </main>
        </div>
      </Provider>
    )
};
