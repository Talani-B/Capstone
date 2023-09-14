import { useState } from "react";

export default function Cart({ token }) {
    const [firstname, setFirstName] = useState('')
    const [products, setProducts] = useState([])
    

    return (
        <div>
            <h1>Cart</h1>

            <form>
                <p>Items Added to Cart</p>

            </form>

        </div>


    )
}