import React, { PropTypes } from 'react'
import ColorSlider from './slider.jsx'
import Immutable from 'immutable'

export default class RGBSlider extends React.Component {
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
    color: this.props.color
  }

  // selected color changes
  componentWillReceiveProps (nextProps) {
    if (nextProps.color.get('id') !== this.state.color.get('id') || nextProps.color.get('origin') !== 'rgb') {
      this.setState({ color: nextProps.color })
    }
  }

  onChange = (value, label) => {
    let color = this.state.color;
    color = color.set(label, value);
    this.setState({ color }, function () {
      this.props.onChange(color)
    });
  }

  render () {
    return (
      <div className='color-selector'>
        <ColorSlider label='r' value={this.state.color.get('r')} max={255} onChange={this.onChange}/><br/>
        <ColorSlider label='g' value={this.state.color.get('g')} max={255} onChange={this.onChange}/><br/>
        <ColorSlider label='b' value={this.state.color.get('b')} max={255} onChange={this.onChange}/>
      </div>
    )
  }
}
