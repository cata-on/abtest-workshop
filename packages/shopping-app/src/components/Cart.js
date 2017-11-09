import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Price from './Price';
import NavBar from './NavBar';
import { VAT } from '../constants';
import style from './Cart.module.css';

export default class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
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

  renderVat(vat) {
    return (
      <tr className={`${style.vatRow} ${style.alignRight}`}>
        <td colSpan="3">VAT:</td>
        <td>
          <Price includesVat>{vat}</Price>
        </td>
      </tr>
    );
  }

  renderNoItems() {
    return <div className={style.noItems}>No items yet :(</div>;
  }

  render() {
    const productPriceSum = this.props.products.reduce(
      (accumulator, product) =>
        accumulator +
        (product.quantity > 0 ? product.quantity * product.price : 0),
      0
    );

    const vat = productPriceSum * VAT / 100;
    const total = productPriceSum + vat;

    return (
      <div>
        <NavBar
          link={{
            to: '/',
            title: 'Go back',
          }}
          title="Cart"
        />

        {total > 0 ? (
          <div>
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
                {this.renderVat(vat)}
                {this.renderTotal(total)}
              </tbody>
            </table>
          </div>
        ) : (
          this.renderNoItems()
        )}
      </div>
    );
  }
}
