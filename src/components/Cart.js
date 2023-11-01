import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  if (!cart || !cart.length) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {/* Calculate and display the total price */}
    </div>
  );
};

export default Cart;
