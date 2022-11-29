import "./login.css"
import { BrowserRouter as Link } from 'react-router-dom';
import { useContext, useRef } from "react";
import axios from 'axios';
import { Context } from "../../context/Context";

export default function Login() {

  const userRef = useRef();
  const passRef = useRef();
  const { dis, isFetch,} = useContext(Context)

  const handleSubm = async (e) => {
    e.preventDefault();

    dis({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      })
      dis({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
      dis({type:"LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubm}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passRef}/>
        <button className="loginButton" type="submit" disabled={isFetch}>Login</button>
      </form>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
    </div>
  )
}
