// src/components/CartItem.js
import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </li>
  );
}

export default CartItem;
