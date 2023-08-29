import { useState } from 'react';


export default  function Products() {
    const [products, setProducts]= useState([]);
    const [name, setName]= useState('')
    const [text, setText]=useState('')

    
    return (
       <div>
        <h1>Products</h1>
     <form>
        <textarea 
       name="username" 
       cols="30" 
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></textarea>

     </form>
     <button>Add To Cart</button>
     <select>Quantity</select>
        </div>
    
    )
}