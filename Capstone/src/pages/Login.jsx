import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

 

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e, email, password)}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}