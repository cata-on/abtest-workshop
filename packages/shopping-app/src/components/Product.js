import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Experiment from 'react-ab/Experiment';
import Variant from 'react-ab/Variant';

import Price from './Price';
import style from './Product.module.css';

import { PRODUCT_ADD_EXPERIMENT, VAT_EXPERIMENT } from '../experiments';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    spec: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    quantity: PropTypes.number,
  };

  static defaultProps = {
    quantity: 0,
  };

  handleAddToCart() {
    this.props.onAddToCart(this.props.id);
  }

  handleRemoveFromCart() {
    this.props.onRemoveFromCart(this.props.id);
  }

  render() {
    return (
      <li key="products" className={style.productLi}>
        <div className={style.product}>
          <div className={style.productImage}>
            <img
              src={this.props.image}
              alt="Product"
              className={style.productImage}
            />
          </div>

          <div className={style.productInfo}>
            <h3 className={style.title}>{this.props.name}</h3>
            <div>
              <b>Price: </b>
              <Experiment name={VAT_EXPERIMENT.NAME}>
                <Variant name={VAT_EXPERIMENT.VARIANTS.A} default fallback>
                  {this.props.oldPrice && (
                    <span>
                      <strike>
                        <Price>{this.props.oldPrice}</Price>
                      </strike>&nbsp;
                    </span>
                  )}
                  <Price>{this.props.price}</Price>
                </Variant>
                <Variant name={VAT_EXPERIMENT.VARIANTS.B}>
                  {this.props.oldPrice && (
                    <span>
                      <strike>
                        <Price includesVat>{this.props.oldPrice}</Price>
                      </strike>&nbsp;
                    </span>
                  )}
                  <Price includesVat>{this.props.price}</Price>
                </Variant>
              </Experiment>
            </div>
            <div>
              <Experiment name={PRODUCT_ADD_EXPERIMENT.NAME}>
                <Variant
                  name={PRODUCT_ADD_EXPERIMENT.VARIANTS.A}
                  default
                  fallback
                >
                  <button
                    className={style.productButton}
                    onClick={this.handleRemoveFromCart}
                    disabled={this.props.quantity === 0}
                  >
                    Remove
                  </button>
                </Variant>
                <Variant name={PRODUCT_ADD_EXPERIMENT.VARIANTS.B}>
                  <button
                    className={style.productButtonGrayscale}
                    onClick={this.handleRemoveFromCart}
                    disabled={this.props.quantity === 0}
                  >
                    Remove
                  </button>
                </Variant>
              </Experiment>

              <button
                className={style.productButton}
                onClick={this.handleAddToCart}
              >
                Add
              </button>
              {this.props.quantity > 0 && (
                <span className={style.quantity}>
                  <b>Quantity: </b> {this.props.quantity}
                </span>
              )}
            </div>
          </div>
        </div>

        <details className={style.details}>
          <summary>
            <b>Details: </b>
          </summary>
          <ul>
            {this.props.spec.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </details>
      </li>
    );
  }
}
