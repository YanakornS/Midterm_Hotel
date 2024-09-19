import axios from "axios";

import Tokenservice from "../services/token.services"; // import your token service
const baseURL = import.meta.env.VITE_BASE_URL; // Make sure this is correct


const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//add interceptor to request object
 instance.interceptors.request.use((config)=>{
  const token = Tokenservice.getLocalAccessToken();
 if(token){
  config.headers['x-access-token'] = token;
 }
 return config;
},(error) =>{
  return Promise.reject(error);
}
);

export default instance;
