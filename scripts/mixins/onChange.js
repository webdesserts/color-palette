import React, { PropTypes } from 'react'
var noop = function () {};

export default {
  propTypes: {
    onChange : PropTypes.func
  },

  getDefaultProps: function () {
    return { onChange: noop };
  }
};

