import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import products from './data/products.json';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import getExperiments, { Overlay } from './experiments';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products.map(product => ({
        ...product,
        quantity: parseInt(localStorage.getItem(product.id), 10) || 0,
      })),
    };

    this.handleProductAdd = this.updateProductQuantity.bind(this, 1);
    this.handleProductRemove = this.updateProductQuantity.bind(this, -1);

    this.experiments = getExperiments();
  }

  updateProductQuantity(amount, newProductId) {
    this.setState(
      state => ({
        products: state.products.map(product => {
          if (product.id === newProductId) {
            const nextQuantity = (product.quantity || 0) + amount;
            return {
              ...product,
              quantity: nextQuantity < 0 ? 0 : nextQuantity,
            };
          } else {
            return product;
          }
        }),
      }),
      state => {
        const updatedProduct = this.state.products.find(
          ({ id }) => id === newProductId
        );
        localStorage.setItem(updatedProduct.id, updatedProduct.quantity);
      }
    );
  }

  render() {
    return [
      <Overlay key="experimentsOverlay" />,
      <BrowserRouter key="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductList
                products={this.state.products}
                onProductAdd={this.handleProductAdd}
                onProductRemove={this.handleProductRemove}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => <Cart products={this.state.products} />}
          />
        </Switch>
      </BrowserRouter>,
    ];
  }
}
