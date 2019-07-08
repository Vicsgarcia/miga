import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import ProductList from './components/ProductsList';
import Tiendas from './components/Tiendas';
import Carousel from './components/Carousel';



class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="header">
          <Header />
          <Carousel />       
        </div>
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route exact path='/tiendas' component={Tiendas} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;