import Vue from 'vue'
import Router from "vue-router"

import Home from './assets/pages/HomePage.vue'
import Single from './assets/pages/SinglePage.vue'
import Category from './assets/pages/CategoryPage.vue'
import Cart from './assets/pages/CartPage.vue'
import Check from './assets/pages/CheckOutPage.vue'
import Contact from './assets/pages/ContactPage.vue'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/single',
        name: 'single',
        component: Single
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      },
      {
        path: '/check',
        name: 'check',
        component: Check
      }, 
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },   
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }        
    ]
  })
  
