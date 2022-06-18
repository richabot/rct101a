import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";



const Navbar = () => {
  const {auth,handlelogout}=React.useContext(AuthContext)
  const {cart,setCart}=React.useContext(CartContext)
  React.useEffect(()=>{
    fetch(`http://localhost:8080/cartItems`).then((resp)=>(resp.json())).then((resp)=>{
      setCart(resp)
    })
  },[setCart])
  return (
    <div style={{display:"flex",justifyContent:"end"}} data-cy="navbar">
      <Link to="/" >Home</Link>
      <span>Cart:({cart.length})</span>
      <button onClick={handlelogout} >{auth ? "Logout":<Link to="/login">Login</Link>}</button>
    </div>
  );
};

export default Navbar;
