/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProdService from '../../services/ProdService';
import { AuthContext } from '../../contexts/AuthStore';


class ProductDetail extends Component {
  state = {
    products: [],
    product: {
      name: "",
      shortDescription: "",
      longDescription: "",
      photo: "",
      price: "",
      id: "",
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    ProdService.getProduct(id)
      .then(
        product => {

          this.setState({ product })
        },
        error => {
          console.error(error);
          if (error.response && error.response.status === 404) {
            this.setState({ shouldRedirect: true })
          }
        }
      )
  }

  render() {
    const { price, photo, shortDescription, longDescription, id } = this.state.product;
    




    return (
      <AuthContext.Consumer>
        {({ isAuthenticated }) => (
          <div className="cards">
                <img src={photo} className="product-detail-photo" alt="Foto de producto" />
              <div className="product-text">
                <h5 className="product-detail-short">{shortDescription}</h5>
                <h5 className="product-detail-price">{price}€</h5>
                <p className="product-detail-long">{longDescription}</p>
                {isAuthenticated() && (
                  
                    <Link className="add-to-cart-button" to={`/carrito/product/${id}`}><button className="login-button"  type="submit" >Añadir al carrito</button></Link>
                )}
                <div className="product-detail-button">
                {!isAuthenticated() && (
                  <p className="">Inica sesión para añadir al carrito <Link className="add-to-cart-button" to="/login"><button className="login-button">LOGIN</button></Link></p>
                )}
                </div>
              </div>
       
          </div>
        )}
      </AuthContext.Consumer>
    );

  }
}

export default (ProductDetail);