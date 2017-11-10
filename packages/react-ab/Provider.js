import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {
  static childContextTypes = {
    experiments: PropTypes.objectOf(PropTypes.string),
  };

  getChildContext() {
    return { experiments: this.props.experiments };
  }

  render() {
    return this.props.children;
  }
}
