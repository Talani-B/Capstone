import { useState } from "react";
import { deleteProduct } from "../API";
import { addToCart } from "../API";

export default function Cart({ token }) {
    const [products, setProducts] = useState([])
    const [cart, setCart]= useState([])
    

    return (
        <div>
            <h1>Cart</h1>

            <form>
                <p>Items Added to Cart</p>

            </form>

        </div>


    )
}