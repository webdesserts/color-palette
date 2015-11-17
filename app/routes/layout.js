import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className='content'>
        <header>
          <IndexLink to='/palettes' activeClassName='active'>Palettes</IndexLink>
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
