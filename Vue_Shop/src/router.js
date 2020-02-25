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
        component: Home,
        props: true
      },
      {
        path: '/single',
        name: 'single',
        component: Single,
        props: true
      },
      {
        path: '/category',
        name: 'category',
        component: Category,
        props: true
      },
      {
        path: '/check',
        name: 'check',
        component: Check,
        props: true,
      }, 
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: true,
      },   
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        props: true,
      }        
    ]
  })
  
