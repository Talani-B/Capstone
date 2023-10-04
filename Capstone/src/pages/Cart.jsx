import { useState } from "react";
import CartCard from "../components/CartCard";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

export default function Cart({ token, cart, setCart }) {
    
    const navigate = useNavigate();
    function navigateToProduct() {

        navigate('/products');

    };
    
    function navigateToCheckout() {
      

        navigate('/checkout');

    };
    
 
    return (
    <div>
      <h1>Cart 🛍️</h1>
    

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

