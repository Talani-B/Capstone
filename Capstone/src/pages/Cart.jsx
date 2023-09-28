import { useState, useEffect } from "react";
import { deleteProduct } from "../API";
import SingleProduct from "./SingleProduct";
import { fetchProductById } from "../API";

export default function Cart({ cart, setCart, token }) {
   
    function deleteProduct(id) {
        setCart(cart.product(product => product.id !== id));
    }
console.log('cart', cart)
    

    return (
        <div>
            <h1>Cart</h1>
                <p>Items Added to Cart</p>
{cart.map(product =>( 
    <div className="cart-product" key={product.id}>
        <img src={product.image} alt={product.title} />
        <p>{product.title} </p>
       <p>Price: ${product.price} </p>
    <p>Quantity: {product.quantity} </p>
    <button onClick={() => deleteProduct(product.id)}>Remove From Cart</button>
    
    </div>
    
))}
            
<ul>
<p>Total = {cart.reduce((acc, product) => acc + product.price, 0)}</p>
                <p><button>Checkout</button></p>
</ul>
        </div>


    )
}