import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  let [cart,setCart]=React.useState([])
  function check(cart,id)
  {
    for(let i=0;i<cart.length;i++)
  {
    if(cart[i].productId===id)
    return true
  }
  return false
  }
  
  let addtocart=(id)=>{

   if(!check(cart,id))
   {
    fetch(`http://localhost:8080/cartItems`,{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({productId:id,count:1})}).then((resp)=>(resp.json())).then((resp)=>{
      setCart([...cart,resp])
    })
   }
   
  }
  return <CartContext.Provider value={{addtocart,cart,setCart}}>{children}</CartContext.Provider>;
};
