import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VAT, CURRENCY } from '../constants';

export default class Price extends Component {
  static propTypes = {
    children: PropTypes.number,
    includesVat: PropTypes.bool,
  };

  static defaultProps = {
    includesVat: false,
  };

  renderVat() {
    const vat = this.props.children * VAT / 100;
    return (
      <span>
        &nbsp;(+ VAT: {CURRENCY}
        {vat.toFixed(2)})
      </span>
    );
  }

  render() {
    return (
      <code>
        {CURRENCY}
        {this.props.children.toFixed(2)}
        {!this.props.includesVat && this.renderVat()}
      </code>
    );
  }
}
