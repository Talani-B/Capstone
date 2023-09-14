import { useState, useEffect} from "react"
import { fetchAllProducts } from "../API"
import ProductCard from "../components/ProductCard"
import NewProductForm from "../components/NewProductForm";
import fetchProductById from "../components/SingleProduct";


export default function Products() {
    const [products, setProducts] = useState([])
    
 async function Products() {
      const response= await fetchProducts()
      console.log(response);
  }
  useEffect(() => {
   fetchAllProducts();
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