import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <article>
        <h1>About Color Palette</h1>
        <p>
          Palette Editor is a react experiment. We're using it as a way to find
          out what React is good at and if we should use it at Integrity. It was
          developed with a slew of different technologies including, but not
          limited to, the following:
        </p>
        <ul>
          <li>React</li>
          <li>React-Router</li>
          <li>Jsx</li>
          <li>Redux</li>
          <li>Immutable.js</li>
          <li>Babel</li>
          <li>Webpack</li>
          <li>Zuul</li>
          <li>Mocha</li>
        </ul>
      </article>
    )
  }
}
