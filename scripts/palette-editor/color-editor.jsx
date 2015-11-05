import React, { PropTypes } from 'react'
import ColorSlider from './slider.jsx';
import Immutable from 'immutable';
import RgbSlider from './rgb-slider.jsx';
import HslSlider from './hsl-slider.jsx';
import WillChange from '../mixins/onChange.js';
import * as convert from '../conversions.js';

export default React.createClass({
  mixins: [WillChange],

  propTypes: {
    color: PropTypes.instanceOf(Immutable.Map)
  },

  render: function () {
    if (!this.props.color) {
      return <div className="color-editor">Select a Color</div>
    }
    return (
      <div className="color-editor">
        <RgbSlider color={this.props.color} onChange={this.onChange}/>
        <HslSlider color={this.props.color} onChange={this.onChange}/>
      </div>
    )
  },

  onChange: function (color) {
    this.props.onChange(color);
  }
})
