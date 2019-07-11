import http from './BaseService';

const addToCart = (id) => http.post(`/products/${id}`)
  .then(res => res.data)

export default {
    addToCart,
}