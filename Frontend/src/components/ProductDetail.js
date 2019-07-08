import React from 'react'

const Product = ({ name, photo, shortDescription, longDescription }) => {

  return (
      <div className="cards">
          <div className="product-card">
              <img src={photo} className="product-photo" alt="Foto de producto" />
              <div className="">
                  <h5 className="product-title">{name}</h5>
                  <p className="product-short">{shortDescription}</p>
                  <p className="product-long">{longDescription}</p>
              </div>
          </div>
      </div>

  )
}

export default Product