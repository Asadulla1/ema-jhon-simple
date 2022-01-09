import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
const Product = (props) => {
  const { name, img, price, seller, stock, star } = props.product;
  //   console.log(props.product);
  return (
    <div className="product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <p id="product-name">{name}</p>
        <p>by: {seller}</p>
        <h3>$ {price}</h3>
        <h4>only {stock} left in stock - order soon</h4>
        <Rating
          className="star"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />
        <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          id="purchase-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
