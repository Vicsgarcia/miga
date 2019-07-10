import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/misc/Header';
import ProductList from './components/prod/ProductsList';
import ProductDetail from './components/prod/Product';
import Carrito from './components/prod/Carrito';
import Tiendas from './components/misc/Tiendas';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/misc/Home';
import Footer from './components/misc/Footer';

class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="header">
          <Header />              
        </div>
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/productos' component={ProductList} />
              <Route exact path='/product/:id' component={ProductDetail} />
              <Route exact path='/tiendas' component={Tiendas} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
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