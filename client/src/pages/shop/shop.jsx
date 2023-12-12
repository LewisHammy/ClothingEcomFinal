import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

export const Shop = () => {

  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>QUANTUM THREADS CO.</h1>
      </div>

      <div className="products">

        {loading ? (
          <div>Loading...</div>
        ): (<Product products={products} />)}
        {/* {PRODUCTS.map((product) => (
          <Product key={product.id} id={product.id} data={product} />
        ))} */}

      </div>
    </div>
  );
};