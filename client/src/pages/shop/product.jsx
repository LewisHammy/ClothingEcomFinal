import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import {PRODUCTS} from "../../products";

export const Product = ({products}) => {
  // const { _id, name, price, imagUrls, description, category, color, size } = products;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [productInfo, setProductInfo] = useState(null);


  // since you're using graphql, you should use useQuery instead of fetch
  // this allows your code to stay within the React lifecycle
  // useEffect is used when you want to fetch or synchornize data outside of your React app

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(`/api/product/${id}`);
  //       if (!response.ok) {
  //         throw new Error('Error fetching product');
  //       }
  //       const data = await response.json();
  //       setProductInfo(data);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  // const cartItemCount = cartItems[id];

  if (!productInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    {products && products.map((product) => (
      <div key={product._id} id={product._id} className="product" >
        <img src={product.imageUrls} alt={product.name} />
      <div className="description">
        <p>
          <b>{product.name}</b>
        </p>
        <p>${product.price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(product._id)}>
        Add To Cart 
        {/* {cartItemCount > 0 && <> ({cartItemCount}) */}
      
      </button>
    </div> 
    ))}
    </div>
  );
};
