import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import CartService from '../../services/CartService';

class Carrito extends Component {
    state = {
      cart: {
        id: '',
        product: '',
        user: ''
      },
        errors: {},
        touch: {},
        isAuthenticated: true
      }

    componentDidMount() {
        CartService.getCart()
            .then(
                cart => {
                  this.setState({ cart })},
                error => {
                    console.error(error);
                    if (error.response && error.response.status === 404) {
                        this.setState({ shouldRedirect: true })
                    }
                }
            )
    }
  
  render() {
    const { errors, product, touch, id, user } =  this.state.cart;

    return (
        <div>
          <h1>{product}</h1>
          <h1>{user}</h1>
          <h1>{id}</h1>

          <button>Pay</button>
            
        </div>
    )
        
      
  }
}

export default Carrito;