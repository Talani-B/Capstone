import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar({ token }) {
    const [cart, setCart] = useState('')
  return (
    <nav>
      <ul>
      <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart"> Cart 🛒</Link>
      
                        
        </li>
        <button>Logout</button>
      </ul>
      
    </nav>
  );
}
