import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Price from './Price';

import style from './PriceBreakdown.module.css';

export default class PriceBreakdownAddVat extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
    total: PropTypes.number,
  };

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
            <Price includesVat>{product.quantity * product.price}</Price>
          </td>
        </tr>
      ));
  }

  renderTotal(total) {
    return (
      <tr className={`${style.totalRow} ${style.alignRight}`}>
        <td colSpan="3" className={style.alignRight}>
          Total:
        </td>
        <td>
          <Price includesVat>{total}</Price>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Product</th>
            <th className={style.alignRight}>Quantity</th>
            <th className={style.alignRight}>Price</th>
            <th className={style.alignRight}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCartItems()}
          {this.renderTotal(this.props.total)}
        </tbody>
      </table>
    );
  }
}
