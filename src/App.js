import React, { Component } from 'react';
import Currency from './Currency';

const URL = 'https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=10';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  getResults = result => {
    fetch(URL)
    .then(response => response.json())
    .then(result => {
      this.setState({
        results: result
      })
    })
  }

  componentDidMount() {
    this.getResults();
  }

  render() {

    const results = this.state.results;

    return (
      <ul className="currencies">
        { results.map(ele =>
          <Currency
            key={ele.id}
            details={ele}
          />)
        }
      </ul>
    );
  }
}

export default App;