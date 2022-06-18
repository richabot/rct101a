import React, {  useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar.jsx";
const Login = () => {

  const {auth,setPassword,setEmail,handlelogin}=useContext(AuthContext)
  console.log(auth)
  return (
    <div>
      <Navbar/>
      <input onChange={(e)=>setEmail(e.target.value)}  />
      <input onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handlelogin}>Login</button>
    </div>
  );
};

export default Login;
