// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
