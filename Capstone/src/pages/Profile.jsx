import { useState } from "react";

export default  function Profile({ token }) {
     const [name,setName] = useState('')
     const [products,setProducts] = useState([])
     const [cart, setCart] = useState('')
    return (
        <div>
        <h1>Profile</h1>
       
       <form>
        <h2>Recent Messages</h2> 

       </form>
       <form>
        <h2>Sent Messages</h2>
       </form>
       </div>

        
    )
}