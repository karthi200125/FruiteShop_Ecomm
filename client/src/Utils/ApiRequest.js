import axios from 'axios';

export const apirequest = axios.create({
  baseURL: "https://fruitsapi.onrender.com/",
  withCredentials: true,  
});

export default apirequest;
