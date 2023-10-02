import { useState } from "react";
import { loginFunction } from "../API";
import { loginUser } from "../API";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken]= useState("");
  const navigate = useNavigate()
  
  function navigateToProduct() {
    
    navigate('/products');

};
        
    async function handleSubmit(event) {
        event.preventDefault();
       

        const result = await loginFunction(username, password)
        console.log("result is", result)

      setToken(result.token)
        console.log("Login page token is ", token)
        setUsername('')
        setPassword('')
    localStorage.setItem("Token", result) 
    if (result) { navigateToProduct(); }


    }
    

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e, username, password)}>
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
        <ul></ul>
          {/* {<label htmlFor="New-User"> */} 
            Create an account? <a href="/register">Register</a>
          {/* </label> */}
        
      </form>
    </>
  );
}
