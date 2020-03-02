import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import products from './modules/products'
import slides from './modules/slides'
import icons from './modules/icons'
import cart from './modules/cart'

Vue.use(Vuex);

const store = new Vuex.Store({
  
  state: {},
  getters : {},
  mutations: {},
  actions:{},
  
  modules : {
    products,
    slides,
    icons,
    cart
  }
})

export default store