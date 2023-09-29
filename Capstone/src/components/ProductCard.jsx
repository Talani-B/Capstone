import { Link } from "react-router-dom";
import { addNewProduct, addToCart } from "../API";
import { deleteProduct } from "../API";

export default function ProductCard({ product, cart, setCart }) {
  const { id, name, price, category, description, image } = product;
  async function handleClick(id) {
    await deleteProduct(id);
  }
  function addItemToCart(product) {
    if (cart.some((item) => item.title === product.title)) {
      const newCart = cart.map((item) => {
        if (item.title === product.title) {
          const newItem = {
            ...item,
            quantity: item.quantity + 1,
          };
          return newItem;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const cartItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, cartItem]);
    }
  }
  return (
    <div className="productCard" key={id}>
      <h2>Name: {name}</h2>
      <p>Id: {id}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Decription: {description}</p>
      <img src={image} alt={name} />
      <Link className="linkbutton" to={`/products/${id}`}>
        View Product
      </Link>
      <div>
        <button onClick={() => addItemToCart(product)}>Add To Cart</button>
      </div>

      <button onClick={() => handleClick(id)}>Delete Product</button>
    </div>
  );
}
