import React from 'react';
import './Product.css';
const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>$Price:{price}</p>
        <p>Manufacturer:{seller}</p>
        <p>
          <small>Rating:{ratings} star</small>
        </p>
      </div>
      <button className="btn-cart">
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
