import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Price from './Price';
import { VAT } from '../constants';

import style from './PriceBreakdown.module.css';

export default class PriceBreakdownAddVat extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
    total: PropTypes.number,
  };

  renderTotal(total) {
    return (
      <tr className={`${style.totalRow} ${style.alignRight}`}>
        <td colSpan="4" className={style.alignRight}>
          Total:
        </td>
        <td>
          <Price includesVat>{total}</Price>
        </td>
      </tr>
    );
  }

  renderVat(vat) {
    return (
      <tr className={`${style.vatRow} ${style.alignRight}`}>
        <td colSpan="3">VAT:</td>
        <td>
          <Price includesVat>{vat}</Price>
        </td>
        <td />
      </tr>
    );
  }

  renderCartItems() {
    return this.props.products
      .filter(product => product.quantity > 0)
      .map(product => (
        <tr key={product.id} className={style.productRow}>
          <td>{product.name}</td>
          <td className={style.alignRight}>{product.quantity}</td>
          <td className={style.alignRight}>
            <Price includesVat>{product.price}</Price>
          </td>
          <td className={style.alignRight}>
            <Price includesVat>
              {product.quantity * product.price * VAT / 100}
            </Price>
          </td>
          <td className={style.alignRight}>
            <Price includesVat>{product.quantity * product.price}</Price>
          </td>
        </tr>
      ));
  }

  render() {
    const vat = this.props.total * VAT / 100;

    return (
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Product</th>
            <th className={style.alignRight}>Quantity</th>
            <th className={style.alignRight}>Price</th>
            <th className={style.alignRight}>VAT ({VAT}%)</th>
            <th className={style.alignRight}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCartItems()}
          {this.renderVat(vat)}
          {this.renderTotal(this.props.total + vat)}
        </tbody>
      </table>
    );
  }
}
