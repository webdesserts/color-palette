import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import PaletteEditor from '../components/palette-editor.jsx'
import { updateColor, createColor } from '../store/actions/palette.js'
import { Palette } from '../store/models.js'

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
  palettes: React.PropTypes.instanceOf(Immutable.List),
  params: PropTypes.shape({ id: PropTypes.string }),
  dispatch: PropTypes.func
}

export default connect((state) => state)(Editor)
