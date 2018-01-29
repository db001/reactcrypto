import React, { Component } from 'react';
import '../styles/currency.css';


class Currency extends Component {

  render() {

    const details = this.props.details;

    return (
      <li className="crypto-currency">
        <h4 className="crypto-title">
          {details.name}
        </h4>
        <p>{details.price_gbp}</p>
        <div className="percentage-change">
          <span>{details.percent_change_1h}</span>
          <span>{details.percent_change_24h}</span>
          <span>{details.percent_change_7d}</span>
        </div>
      </li>
    )

  }
}

export default Currency;