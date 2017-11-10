import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Variant extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return [this.props.children];
  }
}
