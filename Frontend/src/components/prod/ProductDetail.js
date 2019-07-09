
import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ProdService from '../../services/ProdService';

class ProductDetails extends Component {
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

    componentDidMount() {
        const { id } = this.props.match.params;
        ProdService.getProduct(id)
            .then(
                product => this.setState({ product }),
                error => {
                    console.error(error);
                    if (error.response && error.response.status === 404) {
                        this.setState({ shouldRedirect: true })
                    }
                }
            )
    }

  render() {
    const { name, price, photo, shortDescription, longDescription, id } = this.state;
    return (
        <div className="cards">
        <div className="product-card">
            <div className="photo-column">
                <img src={photo} className="product-photo" alt="Foto de producto" />
            </div>
            <div className="product-text">
              <h5 >{shortDescription}</h5>
              <h5 className="product-price">{price}€</h5>
              <p className="product-long">{longDescription}</p>
              
            </div>

        </div>
        <hr />
    </div>
        
      
      );
      
  }
}

export default ProductDetails;