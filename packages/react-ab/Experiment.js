import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Experiment extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static contextTypes = {
    experiments: PropTypes.objectOf(PropTypes.string),
  };

  get selectedVariant() {
    return (
      this.context.experiments && this.context.experiments[this.props.name]
    );
  }

  getActiveVariant() {
    return React.Children
      .toArray(this.props.children)
      .find(childElement => childElement.props.name === this.selectedVariant);
  }

  getFallbackVariant() {
    return React.Children
      .toArray(this.props.children)
      .find(childElement => childElement.props.fallback);
  }

  getDefaultVariant() {
    return React.Children
      .toArray(this.props.children)
      .find(childElement => childElement.props.default);
  }

  render() {
    let variant = null;
    if (!this.selectedVariant) {
      variant = this.getFallbackVariant();
    } else {
      variant = this.getActiveVariant() || this.getDefaultVariant();
    }

    return [variant];
  }
}
