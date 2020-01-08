import Vue from 'vue'
import App from './App.vue'


import SiteHeader from './assets/templates/SiteHeader.vue'
import Products from './assets/templates/Products.vue'
import SinglePage from './assets/templates/SinglePage.vue'
import ShoppingCart from './assets/templates/ShoppingCart.vue'
import HomePage from './assets/templates/HomePage.vue'
import SiteFooter from './assets/templates/SiteFooter.vue'
import Newsletter from './assets/templates/Newsletter.vue'
import Slider from './assets/templates/Slider.vue'
import VueParallaxJs from 'vue-parallax-js'

Vue.component('SiteHeader', SiteHeader);
Vue.component('Products', Products);
Vue.component('SinglePage', SinglePage);
Vue.component('Cart', ShoppingCart);
Vue.component('Newsletter', Newsletter);
Vue.component('Home', HomePage);
Vue.component('SiteFooter', SiteFooter);
Vue.component('Slider', Slider);
Vue.use(VueParallaxJs)

new Vue({
  el: '#app',
  render: h => h(App)
})
