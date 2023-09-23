import { useState, useEffect} from "react"
import { fetchAllProducts } from "../API"
import ProductCard from "../components/ProductCard"
import NewProductForm from "../components/NewProductForm"
import { Link } from "react-router-dom"



export default function Products() {
    const [products, setProducts] = useState([])
    
 async function fetchProducts() {
      const response= await fetchAllProducts()
      setProducts(response)
  }
  useEffect(() => {
    fetchProducts()
    console.log(products);
   }, [])
     return(
        <>
        <h1> Shop All Products</h1>
        <button>  
   <Link to="/cart"> Checkout Cart</Link></button> 

        {products && 
        products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                 />
                 ))
}


</>


    )
}
