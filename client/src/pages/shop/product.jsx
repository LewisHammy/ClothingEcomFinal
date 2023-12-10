import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint URL
    fetch(`your-api-endpoint/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductInfo(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const cartItemCount = cartItems[id];

  if (!productInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};