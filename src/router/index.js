import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
