import axios from 'axios';


const apiBaseUrl = 'http://localhost:3001/api/';

const api = axios.create({
    baseURL: apiBaseUrl,
  });
  
  export default api;



