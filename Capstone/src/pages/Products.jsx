import { useState, useEffect} from "react"
import ProductCard from "../components/ProductCard"
import NewProductForm from "../components/NewProductForm"
import { fetchAllProducts } from "../API"

export default function Products() {
    const [products, setProducts] = useState([])
    
 
    async function Products() {
      const response= await fetchData()
      setProducts(response)
  }
  useEffect(() => {
    console.log("products" , products);
    fetchAllProducts()
  }, [])
     return(
        <>
        <h1> Shop All Products</h1>
        {products.map((product, id) => (
            <ProductCard
                key={id}
                product={product}
                fetchAllproducts={fetchProducts} />
        ))
}
</>


    )
}