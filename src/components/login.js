import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else {
      flag = true;
      try {
        if (flag) {
          let res = await axios.post("http://127.0.0.1:8000/api/login", {
            email: email,
            password: password,
          });
        }
      } catch (err) {
        setEmailError(err.response.status);
      }
    }
  }

  return (
    <div className="signUpContainer">
      <form onSubmit={submit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email...."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {accept && emailError === 422 && (
          <p className="error">the email is already taken</p>
        )}
        <label htmlFor="pass"> Write Password:</label>
        <input
          id="pass"
          type="password"
          placeholder="Password...."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {password.length < 8 && accept && (
          <p className="error">password must be more than 8 chracters</p>
        )}

        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
}
