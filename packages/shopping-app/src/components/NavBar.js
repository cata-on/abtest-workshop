import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './NavBar.module.css';

export default class navBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    }),
  };
  render() {
    return (
      <div className={style.navBar}>
        <h1 className={style.heading}>{this.props.title}</h1>
        <div className={style.link}>
          <Link to={this.props.link.to}>{this.props.link.title}</Link>
        </div>
      </div>
    );
  }
}
