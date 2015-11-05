import React from 'react'
import PaletteEditor from '../palette-editor/palette-editor.jsx'
import Swatch from '../palette-editor/swatch.jsx'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Palette } from '../models.js'

let Palettes = React.createClass({
  render: function () {
    let palettes = this.props.palettes.map(function (p, i) {
      let swatches = p.get('colors').map((c, i) => <Swatch key={i} color={c}/>);
      return (
        <div key={i} className="palette-preview">
          <div className="palette-preview__title">{p.get('name')}</div>
          <Link to={`/palette/${p.get('id')}`}>
          <div className="palette-preview__swatches">{swatches}</div>
          </Link>
        </div>
      )
    });
    return (
      <div className="palettes">
        <h2>Choose a Palette...</h2>
        {palettes}
        <button className="palettes__add">New Palette</button>
      </div>
    )
  }
})

export default connect((state) => state.toObject())(Palettes)
