import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Replace '/api/products' with your actual API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Information</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
