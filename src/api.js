import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/api/v1' : 'http://localhost:3000'

class ShopApi {
  products () {
    return axios.get('/products')
  }
  product (id) {
    return axios.get('/products/' + id)
  }
}

export default new ShopApi()
