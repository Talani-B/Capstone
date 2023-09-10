import { Link } from 'react-router-dom';
import { deleteProduct, fetchAllProducts } from '../API';

export default function ProductCard({product, fetchAllProducts}) {
    const { name, price, category, description, imageUrl} = product;
 async function handleClick(id) {
        await deleteProduct(id);
        await fetchAllProducts();
    }
    return (
        <div className="productCard" key={id}>
        <h2>Title: {title}</h2>
        <p>Price: {price}</p>
        <img src={imageUrl} alt={name} />
        <div>
<Link className="linkbutton" to={`/products/${id}`}>View Product</Link>
<button onClick={() => handleClick(id)}>Add To Cart</button>
<button onClick={() => handleClick(id)}>Delete Product</button>
</div>
</div>
    )
}