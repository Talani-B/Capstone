import { useState } from "react";
import { deleteProduct } from "../API";
import CartCard from "../components/CartCard";

export default function Cart({ token, cart, setCart }) {
    const [products, setProducts] = useState([])
   
    

    return (
        <div>
            <h1>Cart</h1>
                <p>Items Added to Cart</p>

                {cart && 
        cart.map((item) => (
            <CartCard
                key={item}
                setCart={setCart}
                cart={cart}
                product={product}
                 />
        ))
}

        </div>


    )
}