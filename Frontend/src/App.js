import React, { Component } from 'react';

import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12">
            {Product}
          </div>
        </div>
      </div>
    );
  }
}

export default App;