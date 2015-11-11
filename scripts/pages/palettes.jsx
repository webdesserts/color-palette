import React, { PropTypes } from 'react'
import PaletteEditor from '../palette-editor/palette-editor.jsx'
import Swatch from '../palette-editor/swatch.jsx'
import { dispatch, connect } from 'react-redux'
import { createPalette } from '../actions'
import { Link } from 'react-router'
import { Palette } from '../models.js'
import Immutable from 'immutable'

class Palettes extends React.Component {
  handleClick = () => {
    this.props.dispatch(createPalette(prompt('Palette Name:')))
  }

  render () {
    let palettes = this.props.palettes.map(function (p, i) {
      let swatches = p.get('colors').map((c, i) => <Swatch key={i} color={c}/>);
      return (
        <div key={i} className='palette-preview'>
          <div className='palette-preview__title'>{p.get('name')}</div>
          <Link to={`/palette/${p.get('id')}`}>
          <div className='palette-preview__swatches'>{swatches}</div>
          </Link>
        </div>
      )
    });
    return (
      <div className='palettes'>
        <h2>Choose a Palette...</h2>
        {palettes}
        <button className='palettes__add' onClick={this.handleClick}>New Palette</button>
      </div>
    )
  }
}

Palettes.propTypes = {
  palettes: PropTypes.instanceOf(Immutable.List),
  dispatch: PropTypes.func.isRequired
}

export default connect((state) => state.toObject())(Palettes)
