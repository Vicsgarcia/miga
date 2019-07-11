import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import ProductList from './components/prod/ProductsList';
import ProductDetail from './components/prod/ProductDetail';
import Carrito from './components/prod/Carrito';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';

import Home from './components/misc/Home';
import Footer from './components/misc/Footer';
import Tiendas from './components/misc/Tiendas';
import Header from './components/misc/Header';



class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="header">
          <Header />              
        </div>
        <div className="homeWindows">
          <div className="row">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/productos' component={ProductList} />
              <Route exact path='/product/:id' component={ProductDetail} />
              <Route exact path='/product/:id/carrito' component={Carrito} />
              <Route exact path='/tiendas' component={Tiendas} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/carrito" component={Profile} />
              <Route exact path="/carrito" component={Carrito} />

            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;