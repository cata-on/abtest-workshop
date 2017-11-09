import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import style from './Product.module.css';

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
              {this.props.oldPrice && (
                <span>
                  <strike>
                    <Price>{this.props.oldPrice}</Price>
                  </strike>&nbsp;
                </span>
              )}
              <Price>{this.props.price}</Price>
            </div>
            <div>
              <button
                className={style.productButton}
                onClick={this.handleRemoveFromCart}
                disabled={this.props.quantity === 0}
              >
                Remove
              </button>
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
