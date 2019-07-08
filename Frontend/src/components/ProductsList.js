import React, { Component } from 'react'
import ProdService from '../services/ProdService';
//import { Link, Redirect } from 'react-router-dom'



class Product extends Component {
  state = {
    products: [],
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

  componentDidMount(){
    ProdService.list()
      .then(products=> this.setState({ products }))
  }

  render() {
    return (
      <h1>
        hola
        {JSON.stringify(this.state.products)}
      </h1>
    );
  }
}

export default Product;