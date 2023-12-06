import React from "react";

export const Product = (props) => {
  const { ProductName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{ProductName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn"> Add to Cart</button>
    </div>
  );
};