import React, { Component } from 'react';

import style from './Overlay.module.css';
import * as experiments from './runningExperiments';

export default class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  renderOpened() {
    return (
      <div className={style.card}>
        {Object.keys(experiments).map(experimentKey => {
          const experiment = experiments[experimentKey];
          const experimentName = experiment.NAME;
          return (
            <div key={experimentName} className={style.experiment}>
              <label htmlFor={experimentName} className={style.label}>
                {experimentName}:
              </label>
              <select
                id={experimentName}
                onChange={e => {
                  localStorage.setItem(experimentName, e.target.value);
                  window.location.href = window.location.href;
                }}
                defaultValue={localStorage.getItem(experimentName) || ''}
              >
                {!localStorage.getItem(experimentName) && (
                  <option value="" key="none" disabled>
                    &nbsp;
                  </option>
                )}
                {Object.keys(experiment.VARIANTS).map(variant => {
                  const variantName = experiment.VARIANTS[variant];
                  return (
                    <option
                      value={variantName}
                      key={`${experimentName}-${variant}`}
                    >
                      {variant}-{variantName}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
        <div className={style.chevronUp} onClick={this.toggle} />
      </div>
    );
  }

  renderClosed() {
    return (
      <div className={style.chevronDown} onClick={this.toggle}>
        &nbsp;
      </div>
    );
  }

  render() {
    return (
      <div className={style.wrapper}>
        {this.state.open ? this.renderOpened() : this.renderClosed()}
      </div>
    );
  }
}
