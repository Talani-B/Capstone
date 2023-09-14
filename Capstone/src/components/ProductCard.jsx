import { Link } from 'react-router-dom';
import { deleteProduct} from '../API';

export default function ProductCard({product, fetchAllProducts}) {
    const {id, name, price, category, description, imageUrl} = product;
 async function handleClick(id) {
        await deleteProduct(id);
        await fetchAllProducts();
    }
    return (
        <div className="productCard" key={id}>
        <h2>Name: {name}</h2>
        <p>Id: {id}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <p>Decription: {description}</p>
        <img src={imageUrl} alt={name} />
<Link className="linkbutton" to={`/products/${id}`}>View Product</Link>
<button onClick={() => handleClick(id)}>Add To Cart</button>
<button onClick={() => handleClick(id)}>Delete Product</button>
</div>
    )
}