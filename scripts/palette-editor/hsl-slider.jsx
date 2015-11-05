import React, { PropTypes } from 'react'
import ColorSlider from './slider.jsx'
import * as convert from '../conversions.js'
import WillChange from '../mixins/onChange.js'
import Immutable, { Map } from 'immutable'

export default React.createClass({
  mixins: [WillChange],

  propTypes: {
    color: PropTypes.instanceOf(Immutable.Map)
  },

  getDefaultProps: function () {
    return { min: 0, max: 100 }
  },

  getInitialState: function () {
    return({ color: this.props.color, hsl: Map(convert.rgb2hsl(this.props.color.toObject())) })
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.color.get('id') !== this.state.color.get('id') || nextProps.color.get('origin') !== "hsl") {
      this.setState({ color: nextProps.color, hsl: Map(convert.rgb2hsl(nextProps.color.toObject())) })
    }
  },

  render: function() {
    return (
      <div className="color-selector">
        <ColorSlider label="h" value={this.state.hsl.get('h')} max={360} onChange={this.onChange}/><br/>
        <ColorSlider label="s" value={this.state.hsl.get('s')} max={100} onChange={this.onChange}/><br/>
        <ColorSlider label="l" value={this.state.hsl.get('l')} max={100} onChange={this.onChange}/>
      </div>
    )
  },

  onChange: function (value, label) {
    let hsl = this.state.hsl;
    hsl = hsl.set(label, value);

    let rgb = convert.hsl2rgb(hsl.toObject());
    let color = this.state.color;
    color = color.merge(rgb);
    color = color.set('origin', "hsl");

    this.setState({ color: color, hsl: hsl }, function () {
      this.props.onChange(color);
    });
  }
});
