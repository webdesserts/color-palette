import React, { PropTypes } from 'react';
import { Color } from '../models.js';
import Immutable from 'immutable';

export default React.createClass({
  propTypes: {
    color: PropTypes.instanceOf(Immutable.Map)
  },

  render: function () {
    if (this.props.color) {
      var {r, g, b} = this.props.color.toObject();
    } else {
      var [r, g, b] = [0, 0, 0];
    }

    let styles = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
    let className = "swatch";
    if (this.props.selected) { className += " selected" }
    return <div className={className} onClick={this.props.onSelect} style={styles}></div>
  }
});
