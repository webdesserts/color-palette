import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './pages/app.jsx'
import About from './pages/about.jsx'
import Palette from './pages/palette.jsx'
import Palettes from './pages/palettes.jsx'

export default function Routes () {
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="palettes" component={Palettes} />
        <Route path="palette/:id" component={Palette} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  )
}
