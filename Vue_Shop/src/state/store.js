import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import posts from './modules/posts'
import slides from './modules/slides'
import icons from './modules/icons'
import products from './modules/products'

Vue.use(Vuex);

const store = new Vuex.Store({
  
  state: {},
  getters : {},
  mutations: {},
  actions:{},
  
  modules : {
    posts,
    slides,
    icons,
    products
  }
})

export default store