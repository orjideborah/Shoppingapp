// src/components/Products.js
import React from 'react';
import productsData from './productsData';
import ProductCard from './ProductCard';

function Products({ addToCart }) {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
