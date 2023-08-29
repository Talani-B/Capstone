import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Products from './components /Products';
import Profile from './pages/Profile';
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./components/NavBar"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/posts" element={<Products token={token} />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  )
}

export default App