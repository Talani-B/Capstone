import { Link } from 'react-router-dom';
import { addNewProduct, addProductToCart } from '../API';
import { deleteProduct} from '../API';


export default function ProductCard({product}) {
    const {id, name, price, category, description, image} = product;
 async function handleClick() {
    await addProductToCart();
    await deleteProduct(id);
       
    }
    return (
        <div className="productCard" key={id}>
        <h2>Name: {name}</h2>
        <p>Id: {id}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <p>Decription: {description}</p>
        <img src={image} alt={name} />
<Link className="linkbutton" to={`/products/${id}`}>View Product</Link>
<div>
<button onClick={() => handleClick(id)}>Add To Cart</button>
</div>

<button onClick={() => handleClick(id)}>Delete Product</button>
</div>
    )
}