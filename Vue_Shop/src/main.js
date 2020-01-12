import Vue from 'vue'
import App from './App.vue'
// import VueRouter from "vue-router"

// import routes  from "./routes.js"
// Vue.use(VueRouter)


import SiteHeader from './assets/templates/SiteHeader.vue'
import Products from './assets/templates/Products.vue'
import SinglePage from './assets/templates/SinglePage.vue'
import ShoppingCart from './assets/templates/ShoppingCart.vue'
import HomePage from './assets/templates/HomePage.vue'
import SiteFooter from './assets/templates/SiteFooter.vue'
import Newsletter from './assets/templates/Newsletter.vue'
import IconBox from './assets/templates/IconBox.vue'
import Slider from './assets/templates/Slider.vue'

Vue.component('SiteHeader', SiteHeader);
Vue.component('Products', Products);
Vue.component('SinglePage', SinglePage);
Vue.component('Cart', ShoppingCart);
Vue.component('Newsletter', Newsletter);
Vue.component('IconBox', IconBox);
Vue.component('Home', HomePage);
Vue.component('SiteFooter', SiteFooter);
Vue.component('Slider', Slider);

import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs);

import VueAgile from 'vue-agile'
Vue.use(VueAgile)


new Vue({
  el: '#app',
  render: h => h(App)
})


// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomePage
//     },
//     {
//       path: '/single',
//       name: 'single',
//       component: SinglePage
//     }
//   ]
// })