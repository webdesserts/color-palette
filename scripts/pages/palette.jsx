import React from 'react'
import PaletteEditor from '../palette-editor/palette-editor.jsx'
import { connect } from 'react-redux'
import { updateColor } from '../actions.js'
import { Palette } from '../models.js'

function Editor ({ palettes, params, dispatch }) {
    var palette = palettes.find((p) => p.get('id') == params.id);
    return (
      <div className="palette-page">
        <h2>{palette.get('name')}</h2>
        <PaletteEditor palette={palette} onChange={(i, color) => dispatch(updateColor(palette.get('id'), color))}/>
      </div>
    )
};

export default connect(state => state.toObject())(Editor)
