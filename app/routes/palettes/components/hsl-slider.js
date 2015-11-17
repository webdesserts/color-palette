import React, { PropTypes } from 'react'
import Immutable from 'immutable'

import * as convert from '../../../common/conversions'
import ColorSlider from './slider.js'

export default class HSLSlider extends React.Component {
  static propTypes = {
    color: PropTypes.instanceOf(Immutable.Map),
    onChange: PropTypes.func
  }

  static defaultProps = {
    min: 0,
    max: 100,
    onChange() {}
  }

  state = {
    color: this.props.color,
    hsl: Immutable.Map(convert.rgb2hsl(this.props.color.toObject()))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.color.get('id') !== this.state.color.get('id') || nextProps.color.get('origin') !== 'hsl') {
      this.setState({ color: nextProps.color, hsl: Immutable.Map(convert.rgb2hsl(nextProps.color.toObject())) })
    }
  }

  onChange = (value, label) => {
    let hsl = this.state.hsl;
    hsl = hsl.set(label, value);

    let rgb = convert.hsl2rgb(hsl.toObject());
    let color = this.state.color;
    color = color.merge(rgb);
    color = color.set('origin', 'hsl');

    this.setState({ color, hsl }, function () {
      this.props.onChange(color);
    });
  }

  render () {
    return (
      <div className='color-selector'>
        <ColorSlider label='h' value={this.state.hsl.get('h')} max={360} onChange={this.onChange}/><br/>
        <ColorSlider label='s' value={this.state.hsl.get('s')} max={100} onChange={this.onChange}/><br/>
        <ColorSlider label='l' value={this.state.hsl.get('l')} max={100} onChange={this.onChange}/>
      </div>
    )
  }
}
