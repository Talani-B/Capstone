import { useState, useEffect} from "react"
import ProductCard from "../components/ProductCard"
import NewProductForm from "../components/NewProductForm"

export default function fetchAllProducts() {
    const [products, setProducts] = useState([])
    
 
    async function Products() {
      const response= await fetchData()
      setProducts(data)
  }
  useEffect(() => {
    console.log(products);
  }, [])
     return(
        <h1> Shop All Products</h1>
          
    )
}