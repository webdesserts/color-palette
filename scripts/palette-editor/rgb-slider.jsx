import React, { PropTypes } from 'react'
import ColorSlider from './slider.jsx'
import Immutable from 'immutable'
import WillChange from '../mixins/onChange.js'

export default React.createClass({
  mixins: [WillChange],

  propTypes: {
    color: PropTypes.instanceOf(Immutable.Map)
  },

  getDefaultProps: function () {
    return { min: 0, max: 100 }
  },

  getInitialState: function () {
    return { color: this.props.color }
  },

  // selected color changes
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.color.get('id') !== this.state.color.get('id') || nextProps.color.get('origin') !== "rgb") {
      this.setState({color: nextProps.color})
    }
  },

  render: function() {
    return (
      <div className="color-selector">
        <ColorSlider label="r" value={this.state.color.get('r')} max={255} onChange={this.onChange}/><br/>
        <ColorSlider label="g" value={this.state.color.get('g')} max={255} onChange={this.onChange}/><br/>
        <ColorSlider label="b" value={this.state.color.get('b')} max={255} onChange={this.onChange}/>
      </div>
    )
  },

  onChange: function (value, label) {
    let color = this.state.color;
    color = color.set(label, value);
    this.setState({color: color}, function () {
      this.props.onChange(color)
    });
  }
});
