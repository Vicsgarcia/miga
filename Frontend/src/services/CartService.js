import http from './BaseService';


const addProduct = (product) => http.post('/carrito/product/:id') 
.then(res => Promise.resolve(res.data));


export default {
  addProduct,
  
}