import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './views/app.js'
import About from './views/about.js'
import Palette from './views/palette.js'
import Palettes from './views/palettes.js'

export default function Routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Palettes} />
        <Route path='palette/:id' component={Palette} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  )
}
