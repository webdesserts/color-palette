import React, { PropTypes } from 'react'
import { Color } from '../models.js'
import Immutable from 'immutable'

export default class Swatch extends React.Component {
  static propTypes = {
    color: PropTypes.instanceOf(Immutable.Map),
    selected: PropTypes.bool,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    selected: false, onSelect () {}
  }

  onChange = (e) => { this.props.onSelect(this) }

  render () {
    if (this.props.color) {
      var { r, g, b } = this.props.color.toObject()
    } else {
      var [r, g, b] = [0, 0, 0];
    }

    let styles = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
    let className = 'swatch';
    if (this.props.selected) { className += ' selected' }
    return <div className={className} onClick={this.onChange} style={styles}></div>
  }
}


