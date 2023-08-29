import { useState } from "react"

export default function AuthForm({ buttonText, handleSubmit}) {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    return (
        <form onSubmit={(e) => handleSubmit(e, username , password)}>
        
        <label htmlFor="email">Email</label>
        <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit">{buttonText}</button>
    </form>
    )
}