import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import { withAuthConsumer } from './contexts/AuthStore';

import ProductList from './components/prod/ProductsList';
import ProductDetail from './components/prod/ProductDetail';
//import Carrito from './components/prod/Carrito';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserDetail from './components/auth/UserDetail';

import Home from './components/misc/Home';
import Footer from './components/misc/Footer';
import Header from './components/misc/Header';





class App extends Component {
  

  render() {
    console.log(this.props)
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
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/:id" component={UserDetail} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/cuenta" component={UserDetail} />
              
              <Route exact path="/carrito" component={Home} />

            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuthConsumer(App);
