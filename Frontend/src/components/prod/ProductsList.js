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
      price:"",
      id:"",
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
      <div  className="vista">
      <div>
        {this.state.products.map((product, i) => (
          <Product {...product} key={i}/>
        ))}
      </div>
      </div>
    )
  }
}

export default ProductList
;