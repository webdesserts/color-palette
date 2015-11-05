import React, { PropTypes } from 'react'
import Swatch from './swatch.jsx'
import ColorEditor from './color-editor.jsx'
import Immutable from 'immutable'

export default React.createClass({
  propTypes: {
    palette: PropTypes.instanceOf(Immutable.Map),
    onColorUpdate: PropTypes.func,
    onColorCreate: PropTypes.func,
  },

  getInitialState: function () {
    return { selected: null, palette: this.props.palette }
  },

  handleSelect: function (i) {
    if (i === this.state.selected) {
      this.setState({ selected: null })
    } else {
      this.setState({ selected: i })
    }
  },

  handleColorChange: function (color) {
    this.props.onColorUpdate(this.state.selected, color)
  },

  render: function () {
      var palette = this.props.palette.get('colors').map((color, i) => (
        <Swatch key={i} selected={this.state.selected === i} onSelect={this.handleSelect.bind(null, i)} color={color}/>
      ));

      let selected_color = this.props.palette.get('colors').get(this.state.selected);

      return (
        <div className="palette-editor">
          <div className="palette">
            {palette}
            <button onClick={this.props.onColorCreate} className="palette-editor__add-color">+</button>
          </div>
          <ColorEditor color={selected_color || null} onChange={this.handleColorChange}/>
        </div>
      )
  }
})
