
import http from './BaseService';


const list = (product) => http.get('/products', product)
  .then(res => res.data)

const getProduct = (id) => http.get(`/products/${id}`)
  .then(res => res.data)


export default {
  list,
  getProduct
  
}