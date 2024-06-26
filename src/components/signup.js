import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPaswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false;
    } else {
      flag = true;
      try {
        if (flag) {
          let res = await axios.post("http://127.0.0.1:8000/api/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Name...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {name === "" && accept && (
          <p className="error">user name is required</p>
        )}
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

        <label htmlFor="repass">ReWrite password:</label>
        <input
          id="repass"
          type="password"
          placeholder="ReWrite password...."
          value={passwordR}
          onChange={(e) => setPaswordR(e.target.value)}
        ></input>
        {passwordR !== password && accept && (
          <p className="error">password not match</p>
        )}
        <button type="submit" className="submit">
          Regester
        </button>
      </form>
    </div>
  );
}
