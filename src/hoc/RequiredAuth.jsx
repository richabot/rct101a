import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const{auth}=React.useContext(AuthContext)
  console.log(auth)
 
  if(auth)
  {
    return children;
  }
  else{
 
   return <Navigate to="/login" ></Navigate>
  }
  
};

export default RequiredAuth;
