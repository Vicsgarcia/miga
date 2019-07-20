import http from './BaseService';


const addToCart = (product) => http.post(`/carrito/add`, { product })
  .then(res => res.data);

const getCart = () => http.get(`/carrito/`)
  .then(res => res.data);

export default {
  addToCart,
  getCart 
}