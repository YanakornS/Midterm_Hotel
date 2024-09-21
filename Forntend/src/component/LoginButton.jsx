import React from "react";
import Login from "../assets/Login.png"
const LoginButton = () => {
  return <button className="btn bg-blue-500 text-white"> <img src={Login} alt="Profiles Icon" className="w-5 h-5" />Login</button>;
};

export default LoginButton;