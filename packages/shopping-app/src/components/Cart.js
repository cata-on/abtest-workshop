import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Experiment from 'react-ab/Experiment';
import Variant from 'react-ab/Variant';

import { VAT_EXPERIMENT } from '../experiments';

import Product from './Product';
import NavBar from './NavBar';
import PriceBreakdownVatIncluded from './PriceBreakdownVatIncluded';
import PriceBreakdownAddVat from './PriceBreakdownAddVat';
import style from './Cart.module.css';

export default class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
  };

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

    return (
      <div>
        <NavBar
          link={{
            to: '/',
            title: 'Go back',
          }}
          title="Cart"
        />

        {productPriceSum > 0 ? (
          <Experiment name={VAT_EXPERIMENT.NAME}>
            <Variant name={VAT_EXPERIMENT.VARIANTS.A} default fallback>
              <PriceBreakdownAddVat
                total={productPriceSum}
                products={this.props.products}
              />
            </Variant>
            <Variant name={VAT_EXPERIMENT.VARIANTS.B}>
              <PriceBreakdownVatIncluded
                total={productPriceSum}
                products={this.props.products}
              />
            </Variant>
          </Experiment>
        ) : (
          this.renderNoItems()
        )}
      </div>
    );
  }
}
