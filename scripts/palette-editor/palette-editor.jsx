import React, { PropTypes } from 'react'
import Swatch from './swatch.jsx'
import ColorEditor from './color-editor.jsx'
import Immutable from 'immutable'

export default class PaletteEditor extends React.Component {
  static propTypes = {
    palette: PropTypes.instanceOf(Immutable.Map),
    selected: PropTypes.instanceOf(Immutable.Map),
    onColorUpdate: PropTypes.func,
    onColorCreate: PropTypes.func
  }

  static defaultProps = { onColorUpdate () {}, onColorCreate () {} }

  state = { selectedId: null, palette: this.props.palette }

  handleSelect = (swatch) => {
    let id = swatch.props.color.get('id')
    if (id === this.state.selectedId) {
      this.setState({ selectedId: null })
    } else {
      this.setState({ selectedId: id })
    }
  }

  handleColorChange = (color) => {
    this.props.onColorUpdate(this.state.selected, color)
  }

  render () {
    var palette = this.props.palette.get('colors').map((color, i) => (
      <Swatch key={i} selected={this.state.selected === color} onSelect={this.handleSelect} color={color}/>
    ));

    let selected_color = this.props.palette.get('colors').find((color) => color.get('id') === this.state.selectedId);

    return (
      <div className='palette-editor'>
        <div className='palette'>
          {palette}
          <button onClick={this.props.onColorCreate} className='palette-editor__add-color'>+</button>
        </div>
        <ColorEditor color={selected_color || null} onChange={this.handleColorChange}/>
      </div>
    )
  }
}
