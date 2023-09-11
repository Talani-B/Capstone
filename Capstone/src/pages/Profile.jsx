import { useState } from "react";

export default function Profile({ token }) {
    const [firstname, setFirstName] = useState('')
    const [products, setProducts] = useState([])

    return (
        <div>
            <h1>Profile</h1>

            <form>
                <p>Recent Products Purchased</p>

            </form>

        </div>


    )
}