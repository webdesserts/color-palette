import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <header>
          <IndexLink to='/' activeClassName='active'>Palettes</IndexLink>
          <Link to='/about' activeClassName='active'>About</Link>
          <h1>Palette Editor</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
