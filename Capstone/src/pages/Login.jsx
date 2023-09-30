import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API";
import "../App.css";

export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function navigateToProduct() {}
  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 6 || username === "") {
      setUsername("");
      setPassword("");
      return setError("ERROR: incorrect username or password");
    }

    const result = await loginUser(username, password, setError);
    console.log("result", result);

    localStorage.setItem("Token", result);
    setToken(localStorage.getItem("Token"));
    console.log("Login token", token);
    setUsername("");
    setPassword("");
    if (result) {
      navigate("/products");
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e, username, password, error)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ul></ul>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ul></ul>
        <button type="submit">Login</button>
        <ul>
          <label htmlFor="New-User">
            Create an account? <a href="/register">Register</a>
          </label>
        </ul>
      </form>
    </>
  );
}
