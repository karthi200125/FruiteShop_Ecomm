import axios from 'axios';

export const apirequest = axios.create({
  baseURL: "https://ecomapi-vau1.onrender.com/",
  withCredentials: true,  
});

export default apirequest;
