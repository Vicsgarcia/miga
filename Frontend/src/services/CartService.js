import http from './BaseService';


const addProduct = (product) => http.post() 
.then(res => Promise.resolve(res.data));


export default {
  addProduct,
  
}