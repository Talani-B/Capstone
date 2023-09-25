import { Link } from "react-router-dom";

export default function NavBar({ token }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
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