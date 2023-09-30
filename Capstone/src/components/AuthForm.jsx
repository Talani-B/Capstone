import { useState } from "react";
import { loginUser } from "../API";
import { addNewUser } from "../API";

export default function AuthForm({ buttonText, handleSubmit }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => handleSubmit(e, firstname, lastname, username, password)}
    >
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <ul></ul>
      <ul></ul>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ul></ul>
          <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ul></ul>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
      <ul>
      <label htmlFor="Current-User">
        Already have an account ? <a href="/login">Login</a>
      </label>
      </ul>
    </form>
  );
}
