import React, { Component } from 'react'
import list from '../services/ProdService';
import { Link, Redirect } from 'react-router-dom'



class Product extends Component {
  state = {
    product: {
      name: "",
      shortDescription: "",
      longDescription:  "" ,
      photo:"",
      price:""
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }


  render() {
    return (
      <div className="App">
        <Product name={this.state.Product.name} />
      </div>
    );
  }
}

export default Product;