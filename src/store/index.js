import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, product) {
      const record = state.cart.find(i => i.product.id === product.id)
      if (!record) {
        state.cart.push({
          product: product,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    }
  },
  getters: {
    cartItems: state => {
      return state.cart.filter(todo => todo.done)
    },
    cartCount: state => {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0)
    }
  }
})
