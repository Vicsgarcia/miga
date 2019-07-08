import React from 'react'

const Product = ({ name, photo, shortDescription }) => {

  return (
    <div className="card mb-4">
    <img src={photo} className="card-img-top" alt="Foto de producto" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{shortDescription}</p>
    </div>

  </div>

  )
}

export default Product



