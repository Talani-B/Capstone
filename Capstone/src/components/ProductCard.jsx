import { Link } from 'react-router-dom';
import { deleteProduct, fetchAllProducts } from '../API';

export default function ProductCard({ product, fetchAllProducts }) {
    const { title, price, category, description, imageUrl } = product;
    async function handleClick(id) {
        await deleteProduct(id);
        await fetchAllProducts();
    }
    return (
        <div className="productCard" key={id}>
            <h2>Title: {title}</h2>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
            <img src={imageUrl} alt={title} />

            <Link className="linkbutton" to={`/products/${id}`}>View Product</Link>
            <button onClick={() => handleClick(id)}>Add To Cart</button>
            <button onClick={() => handleClick(id)}>Delete Product</button>
        </div>
    )
}