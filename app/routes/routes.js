import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import Layout from './layout.js'
import About from './about/about.js'
import * as Palettes from './palettes/index'

export default function Routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRedirect to="palettes"/>
        <Route path="palettes">
          <IndexRoute component={Palettes.All}/>
          <Route path=':id' component={Palettes.Edit}/>
        </Route>
        <Route path='about' component={About} />
      </Route>
    </Router>
  )
}
