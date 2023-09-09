import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../API'

export default  function Products() {
    const [products, setProducts]= useState([]);
    
   
    
    return (
       
       <>
        <h1>Products</h1>
     <form>

     </form>
     <button>Add To Cart</button>
    
        </>
    
    )
}