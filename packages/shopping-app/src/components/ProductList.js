import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ProductList.module.css';
import Product from './Product';
import NavBar from './NavBar';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.handleProductAddToCart = this.handleProductAddToCart.bind(this);
    this.handleProductRemoveFromCart = this.handleProductRemoveFromCart.bind(
      this
    );
  }

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
  };

  handleProductAddToCart(productId) {
    this.props.onProductAdd(productId);
  }

  handleProductRemoveFromCart(productId) {
    this.props.onProductRemove(productId);
  }

  render() {
    return (
      <div>
        <NavBar
          link={{
            to: '/cart',
            title: 'See cart',
          }}
          title="Products"
        />
        <ul className={style.productList}>
          {this.props.products.map(product => (
            <Product
              {...product}
              key={product.id}
              onAddToCart={this.handleProductAddToCart}
              onRemoveFromCart={this.handleProductRemoveFromCart}
            />
          ))}
        </ul>
      </div>
    );
  }
}
