// src/components/Product.js
import React from 'react';

import './Product.css';


const products = [
  {
    id: 1,
    name: 'Supra',
    description: 'Short wheelbase and large-diameter tires present a side view package with a striking footprint.',
    price: 30000,
    imageUrl: './car1.jpg',
  },
  {
    id: 2,
    name: 'Lamborgini',
    description: 'Lamborghini is synonymous with luxury, performance, and distinctive Italian design.',
    price: 45000,
    imageUrl: './car2.jpeg',
  },
  {
    id: 3,
    name: 'G-Wagon',
    description: 'Teh G Wagen is one of the most capable off road trucks out of the factory ever made.',
    price: 55000,
    imageUrl: './car3.jpg',
  },
  // Add more car products

  
];

const Product = () => {
  return (
    <div>
      <h1>Car Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
