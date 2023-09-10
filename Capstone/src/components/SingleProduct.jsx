import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { fetchProductById } from "../API";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductById(id);
      setProduct(data);
    }
    fetchData();
  }, [id]);
  if (!product) {
    return <h1> Uploading Product...</h1>
  }
  console.log(product);
  const { title, price, category, description, imageUrl} = product;
  return (
    <>
      <Link to='/'>Back to All Products</Link>
      <div className="single-product">
        <img src={imageUrl} alt={title} />
        <h2>Title: {title}</h2>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        { category &&
          <section>
            <h3>Catergory: {category.title}</h3>
          </section>
        }
      </div>
    </>
  )
}