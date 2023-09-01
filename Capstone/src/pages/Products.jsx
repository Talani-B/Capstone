import { useState } from 'react';
import { getAllProducts } from '../API'

export default  function Products() {
    const [products, setProducts]= useState([]);
    const [name, setName]= useState('')
    const [text, setText]=useState('')
   
    
    return (
       
       <>
        <h1>Products</h1>
     <form>

     </form>
     <button>Add To Cart</button>
    
        </>
    
    )
}