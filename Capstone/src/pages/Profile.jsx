import { useState } from "react";

export default  function Profile({ token }) {
     const [name,setName] = useState('')
     const [products,setProducts] = useState([])
     
    return (
        <div>
        <h1>Profile</h1>
       
       <form>
        <p>Recent Items Purchased</p> 

       </form>
      
       </div>

        
    )
}