import React, { Component } from 'react'
import ProdService from '../services/ProdService';
//import { Link, Redirect } from 'react-router-dom'



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

  componentDidMount(){
    ProdService.list()
      .then(products=> console.log(products))
  }

  render() {
    return (
      <h1>hola</h1>
    );
  }
}

export default Product;