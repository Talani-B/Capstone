import { useState, useEffect } from "react";
import { fetchAllProducts } from "../API";
import ProductCard from "../components/ProductCard";
import NewProductForm from "../components/NewProductForm";
import "../App.css";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetchAllProducts();
    setProducts(response);
  }
  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);
  return (
    <>
      <h1> Shop All Products</h1>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            setCart={setCart}
            cart={cart}
            product={product}
          />
        ))}
    </>
  );
}
