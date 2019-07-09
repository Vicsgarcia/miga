import React, { Component } from 'react'
import ProdService from '../../services/ProdService';
import Product from './Product';


class ProductList extends Component {
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
      <div>
        {this.state.products.map((product, i) => (
          <Product {...product} key={i}/>
        ))}
      </div>
    )
  }
}

export default ProductList
;