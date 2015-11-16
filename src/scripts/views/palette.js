import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import PaletteEditor from '../components/palette-editor.js'
import { updateColor, createColor } from '../store/actions/palette.js'
import { Palette } from '../store/models.js'

class Editor extends React.Component {
   static propTypes = {
    palettes: React.PropTypes.instanceOf(Immutable.List),
    params: PropTypes.shape({ id: PropTypes.string }),
    dispatch: PropTypes.func
  }

  render () {
    let { dispatch, palettes, params } = this.props
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
}



export default connect((state) => state)(Editor)
