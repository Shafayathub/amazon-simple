import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
      <button
        onClick={() => props.HandleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>
          Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{' '}
        </p>
      </button>
    </div>
  );
};

export default Product;
