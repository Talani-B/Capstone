import { useState } from "react";
import CartCard from "../components/CartCard";

export default function Cart({ token, cart, setCart }) {
  return (
    <div>
      <h1>Cart</h1>
      <p>Items Added to Cart</p>

      {cart &&
        cart.map((item) => (
          <CartCard
            key={item.id}
            setCart={setCart}
            cart={cart}
            product={item}
          />
        ))}
    </div>
  );
}
