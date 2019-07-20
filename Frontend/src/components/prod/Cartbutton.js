import React, { Component } from 'react'
import CartService from '../../services/CartService';


class CartButton extends Component {
  state = {
    cart: {
        product: "",
        amount:"",
        status:"",
      },
    errors: {},
    touch: {},   
  }


  handleCart = () => {
    CartService.addProduct()
      .then(() => this.props.onUserLogin(null))
  }  
  

  render() {
        return (
            <div>
                <button className="login-button" onClick={this.handleCart}>
                    Añadir al carrito
          </button>
            </div>
        );
    };
}


export default (CartButton)