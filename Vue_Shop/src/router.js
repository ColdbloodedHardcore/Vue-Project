import Vue from 'vue'
import Router from "vue-router"

import HomePage from './assets/templates/HomePage.vue'
import Category from './assets/templates/Category.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'shop',
        component: HomePage
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      }
    ]
  })
