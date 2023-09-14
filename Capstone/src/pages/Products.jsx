import { useState, useEffect} from "react"
import { fetchAllProducts } from "../API"
import ProductCard from "../components/ProductCard"



export default function Products() {
    const [products, setProducts] = useState([])
    
 async function Products() {
      const response= await fetchData()
      setProducts(response)
  }
  useEffect(() => {
    console.log(products);
   }, [])
     return(
        <>
        <h1> Shop All Products</h1>
        {products.map((product, id) => (
            <ProductCard
                key={id}
                product={product}
                fetchAllproducts={fetchAllProducts} />
        ))
}
</>


    )
}
