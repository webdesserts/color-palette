import React, { PropTypes } from 'react'
import { dispatch, connect } from 'react-redux'
import { Link } from 'react-router'
import Immutable from 'immutable'

import Swatch from '../../../common/components/swatch.js'
import { createPalette } from '../../../store/palettes/action-creators.js'
import { Palette } from '../../../store/palettes/models.js'

class Palettes extends React.Component {
  static propTypes = {
    palettes: PropTypes.instanceOf(Immutable.List),
    dispatch: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.dispatch(createPalette(prompt('Palette Name:')))
  }

  render () {
    let palettes = this.props.palettes.map(function (p, i) {
      let swatches = p.get('colors').map((c, i) => <Swatch key={i} color={c}/>);
      let path = `/palettes/${p.get('id')}`;
      return (
        <div key={i} className='palette-preview'>
          <div className='palette-preview__title'>{p.get('name')}</div>
          <Link to={path}>
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

export default connect((state) => state)(Palettes)
