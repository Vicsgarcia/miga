
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProdService from '../../services/ProdService';
import {withAuthConsumer } from '../../contexts/AuthStore';

class ProductDetail extends Component {
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

    componentWillMount() {
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

  render() {
    const { price, photo, shortDescription, longDescription, id } = this.state.product;
    
    return (
        <div className="cards">
        <div className="product-card">
            <div className="photo-column">
                <img src={photo} className="product-photo" alt="Foto de producto" />
            </div>
            <div className="product-text">
              <h5>{shortDescription}</h5>
              <h5 className="product-price">{price}€</h5>
              <p className="product-long">{longDescription}</p>
              
              <button className="" form="register-form" type="submit" > 
                <Link className="add-to-cart-button" to={`/product/${id}/carrito`}>Añadir al Carrito</Link>
              </button>              

            </div>

        </div>
        <hr />
    </div>
        
      
      );
      
  }
}

export default ProductDetail;