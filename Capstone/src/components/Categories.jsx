import { useEffect, useState } from "react";
import { fetchCategories } from "../Api/index.js";


export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let categoriessInfo = await fetchCategories();
      console.log("All Categories", categoriessInfo);
      setCategories(categoriessInfo);
    };
    getCategories();
  }, []);
  return (
    <div>
      <h1>Categories</h1>
      <div className="categoriesContainer">
        {categories.map((product, i) => (
          <div className="productCard" key={i}>
          </div>
        ))}
      </div>
    </div>
  );
}