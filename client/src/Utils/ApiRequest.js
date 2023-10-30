import axios from 'axios';

export const apirequest = axios.create({
  baseURL: "http://localhost:8800/",
  withCredentials: true,
});


export default apirequest;
