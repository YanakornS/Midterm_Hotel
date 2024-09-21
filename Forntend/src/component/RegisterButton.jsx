import React from "react";
import Register from "../assets/register.png"


const RegisterButton = () => {
  return <button className="btn bg-[#3ABEF9] text-white"><img src={Register} alt="Profiles Icon" className="w-5 h-5" />Register</button>;
};

export default RegisterButton;