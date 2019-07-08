import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom'
import Product from './components/Product';
import 'antd-mobile/dist/antd-mobile.css';


class App extends Component {


  render() {

    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path='/' component={Product} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;