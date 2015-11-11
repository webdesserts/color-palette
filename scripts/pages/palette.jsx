import React, { PropTypes } from 'react'
import PaletteEditor from '../palette-editor/palette-editor.jsx'
import { connect } from 'react-redux'
import { updateColor, createColor } from '../actions.js'
import { Palette } from '../models.js'
import Immutable from 'immutable'

function Editor ({ dispatch, palettes, params }) {
  let palette = palettes.find((p) => p.get('id') == params.id);

  if (!palette) {
    return <div>Can't find this Palette</div>
  } else {
    return (
      <div className='palette-page'>
        <h2>{palette.get('name')}</h2>
        <PaletteEditor
          palette={palette}
          onColorUpdate={(i, color) => dispatch(updateColor(palette.get('id'), color))}
          onColorCreate={() => dispatch(createColor(palette.get('id')))}
        />
      </div>
    )
  }
}

Editor.propTypes = {
  palettes: PropTypes.instanceOf(Immutable.List),
  params: PropTypes.shape({ id: PropTypes.string }),
  dispatch: PropTypes.func
}

export default connect((state) => state.toObject())(Editor)
