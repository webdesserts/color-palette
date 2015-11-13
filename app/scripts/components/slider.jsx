import React, { PropTypes } from 'react'

export default class Slider extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    min: 0,
    max: 100,
    onChange() {}
  }

  state = { value: this.props.value || 0 }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value })
  }

  onChange = (e) => {
    let value: string = e.target.value;

    // value needs to be a digit
    if (!this.isNumber(value)) { return; }

    // wait for user to finish typing possible numbers
    if (value === '-' || value === '') {
      this.setState({ value });
    } else {
      // don't allow the user to exceed the given min or max
      if (value > this.props.max) { value = this.props.max }
      else if (value < this.props.min) { value = this.props.min }

      let parsed_value = parseInt(value);
      this.setState({ value: parsed_value }, function () {
        this.props.onChange(parsed_value, this.props.label);
      });
    }
  }

  isNumber (value: string): Boolean {
    return /^-?\d*$/.test(value)
  }

  render () {
    return (
      <div className='color-slider'>
        <div ref='label' className='color-slider__label'>{this.props.label}</div>
        <input ref='textbox' className='color-slider__textbox' type='text' value={this.state.value} onChange={this.onChange}/>
        {this.props.min}<input ref='range' className='color-slider__range' type='range' value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.onChange}/>{this.props.max}<br/>
      </div>
    )
  }

}
