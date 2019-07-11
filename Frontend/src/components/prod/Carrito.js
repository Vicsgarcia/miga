import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import addToCart from '../../services/CartService'
import ProdService from '../../services/ProdService'


export default class Carrito extends Component {
  state = {
    FullCarrito: [],
    carrito: {
          name: '',
          price: '',
          user: '',
    },
    errors: {},
    touch: {},
    addToCart:{},
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    ProdService.getProduct(id)
        .then(
            product => {
              this.setState({ product })},
            error => {
                console.error(error);
                if (error.response && error.response.status === 404) {
                    this.setState({ shouldRedirect: true })
                }
            }
        )
}


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
        addToCart.addToCart(this.state.id)
        .then(
          (addToCart) => this.setState({ isRegistered: true }),
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                email: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { name, price, user} = this.state.addToCart;
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{user}</p>
        </div>
  
    )
}
}

