import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './views/app.jsx'
import About from './views/about.jsx'
import Palette from './views/palette.jsx'
import Palettes from './views/palettes.jsx'

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
