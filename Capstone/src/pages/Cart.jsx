import { useState } from "react";

export default function Cart({ token }) {
    const [firstname, setFirstName] = useState('')
    const [products, setProducts] = useState([])
    const [cart, setCart]= useState('')
    

    return (
        <div>
            <h1>Cart</h1>
            <p>Items Added to Cart:</p>
            

        </div>


    )
}