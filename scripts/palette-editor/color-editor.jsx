import React, { PropTypes } from 'react'
import ColorSlider from './slider.jsx';
import Immutable from 'immutable';
import RgbSlider from './rgb-slider.jsx';
import HslSlider from './hsl-slider.jsx';
import * as convert from '../conversions.js';

export default class ColorEditor extends React.Component {
  onChange = (color) => {
    this.props.onChange(color);
  }

  render () {
    if (!this.props.color) {
      return <div className='color-editor'>Select a Color</div>
    }
    return (
      <div className='color-editor'>
        <RgbSlider color={this.props.color} onChange={this.onChange}/>
        <HslSlider color={this.props.color} onChange={this.onChange}/>
      </div>
    )
  }
}

ColorEditor.propTypes = {
  color: PropTypes.instanceOf(Immutable.Map),
  onChange: PropTypes.func
}

ColorEditor.defaultProps = {
  onChange() {}
}
