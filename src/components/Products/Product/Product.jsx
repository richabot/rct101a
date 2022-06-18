import React from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({el}) => {
  // Note: this id should come from api
  let [itmcart,setItemcart]=React.useState({})
  React.useEffect(()=>{
    fetch(`http://localhost:8080/cartItems?productId=${el.id}`).then((resp)=>(resp.json())).then((resp)=>{
      setItemcart({resp})
    })
  },[el.id])



  const{addtocart}=React.useContext(CartContext)
  const product = { id: el.id };
  console.log(itmcart)
  return (
    <div style={{border:"1px solid black"}} >
      <h3 >{el.name}</h3>
     
      <button onClick={()=>addtocart(product.id)} >Add to cart</button>
      <div>
        <button >+</button>
        <span >0
        </span>
        <button >-</button>
        <button >Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
