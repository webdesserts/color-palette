import React, { PropTypes } from 'react'
import WillChange from '../mixins/onChange.js'

export default React.createClass({
  mixins: [WillChange],

  propTypes: {
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number
  },

  getDefaultProps: function () {
    return { min: 0, max: 100 }
  },

  getInitialState: function() {
    return { value: this.props.value || 0 }
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ value: nextProps.value })
  },

  onChange: function (e) {
    let value = e.target.value;

    // value needs to be a digit
    if (!this.isNumber(value)) { return; }

    // wait for user to finish typing possible numbers
    if (value === '-' || value === '') {
      this.setState({ value: value });
    } else {
        // don't allow the user to exceed the given min or max
      if (value > this.props.max) { value = this.props.max }
      else if (value < this.props.min) { value = this.props.min }

      value = parseInt(value);
      this.setState({ value: value }, function () {
        this.props.onChange(value, this.props.label);
      });
    }
  },

  render: function() {
    return (
      <div className="color-slider">
        <div ref="label" className="color-slider__label">{this.props.label}</div>
        <input ref="textbox" className="color-slider__textbox" type="text" value={this.state.value} onChange={this.onChange}/>
        {this.props.min}<input ref="range" className="color-slider__range" type="range" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.onChange}/>{this.props.max}<br/>
      </div>
    )
  },

  isNumber(value) {
    return /^-?\d*$/.test(value)
  }
});
