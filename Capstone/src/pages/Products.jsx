import { useState, useEffect } from "react";
import { fetchAllProducts } from "../API";
import ProductCard from "../components/ProductCard";
import NewProductForm from "../components/NewProductForm";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  async function fetchProducts() {
    const response = await fetchAllProducts();
    setProducts(response);
  }
  useEffect(() => {
    fetchProducts();
    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    setCategories(uniqueCategories);
    console.log(products);
    console.log(categories);
  }, []);
  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }
  let Products = products;
  if (selectedCategory !== "all") {
    products = products.filter((product) => product.category === selectCategory
    );
  }
  return (
    <>
      <h1> Shop All Products</h1>
      <p> 🛍️ {cart.length} </p>
      <select onChange={selectCategory}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option> 
        ))}
      </select>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            cart={cart}
            setCart={setCart}
            product={product}
          />
        ))}
    </>
  );
}
