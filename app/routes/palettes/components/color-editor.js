import React, { PropTypes } from 'react'
import Immutable from 'immutable';

import * as convert from '../../../common/conversions';
import ColorSlider from './slider.js';
import RgbSlider from './rgb-slider.js';
import HslSlider from './hsl-slider.js';

export default class ColorEditor extends React.Component {
  static propTypes = {
    color: PropTypes.instanceOf(Immutable.Map),
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange() {}
  }

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


