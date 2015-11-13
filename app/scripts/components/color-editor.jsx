import React, { PropTypes } from 'react'
import Immutable from 'immutable';

import * as convert from '../conversions';
import ColorSlider from './slider.jsx';
import RgbSlider from './rgb-slider.jsx';
import HslSlider from './hsl-slider.jsx';

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


