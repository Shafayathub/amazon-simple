import React from 'react';
import './Product.css';
const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <p className="product-name">{name}</p>
      <h6>Price:{price}</h6>
      <p>Manufacturer:{seller}</p>
      <h6>Rating:{ratings} star</h6>
    </div>
  );
};

export default Product;
