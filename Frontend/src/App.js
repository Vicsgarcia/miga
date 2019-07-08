import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import ProductList from './components/ProductsList';



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
              <Route exact path='/' component={ProductList} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;