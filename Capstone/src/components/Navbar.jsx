import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ cart, setCart,token, setToken }) {
    const navigate = useNavigate();
    console.log(cart, 'cart in navbar')
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <button>Logout</button>
            </ul>
        </nav>
    )
}