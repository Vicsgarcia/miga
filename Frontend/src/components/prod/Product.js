import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ name, price, photo, shortDescription, longDescription, id }) => {

  return (
      <div className="cards">
          <div className="product-card">
              <div className="photo-column">
                 <Link to={`/product/${id}`} className="product-photo" > <img src={photo} className="product-photo" alt="Foto de producto" /> </Link>
              </div>
              <div className="product-text">
                <Link to={`/product/${id}`}className="product-short" ><h5 className="product-h5" >{shortDescription}</h5></Link>
                <h5 className="product-price">{price}€</h5>
                <p className="product-long">{longDescription}</p>
              </div>

          </div>
          <hr />
      </div>

  )
}

export default Product