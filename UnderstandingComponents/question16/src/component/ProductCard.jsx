import React from 'react'

const ProductCard = () => {
  return (
    <div>
         <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      {discount !== undefined && (
        <span className="discount-badge">{discount}% OFF</span>
      )}
    </div>
    </div>
  )
}

export default ProductCard