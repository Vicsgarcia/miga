import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/misc/Header';
import ProductList from './components/prod/ProductsList';
import Tiendas from './components/misc/Tiendas';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/misc/Home';



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
              <Route exact path='/tiendas' component={Tiendas} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;