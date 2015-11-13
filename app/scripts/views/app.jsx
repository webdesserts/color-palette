import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function App ({ children }) {
  return (
    <div className='content'>
      <header>
        <Link to='/' activeClassName='active'>Palettes</Link>
        <Link to='/about' activeClassName='active'>About</Link>
        <h1>Palette Editor</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

