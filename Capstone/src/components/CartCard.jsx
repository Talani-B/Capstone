import { Link } from "react-router-dom";
import { addNewProduct, addToCart } from "../API";

export default function CartCard({ product, cart, setCart }) {
  const { id, title, price, category, description, quantity, image } = product;
  async function handleClick(product) {
    const newCart = cart.filter((item) => item.title !== product.title);
    console.log(newCart);
    setCart(newCart);
  }

  return (
    <div className="productCard" key={id}>
      <h2>Title: {title}</h2>
      <p>Id: {id}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Quantity: {quantity}</p>
      <p>Decription: {description}</p>
      <img src={image} alt={title} />
      <Link className="linkbutton" to={`/products/${id}`}>
        View Product
      </Link>
      <button onClick={() => handleClick(product)}>Delete From Cart</button>
    </div>
  );
}
