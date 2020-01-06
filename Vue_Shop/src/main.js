import Vue from 'vue'
import App from './App.vue'


import SiteHeader from './assets/templates/SiteHeader.vue'
import Post from './assets/templates/Post.vue'
import SinglePage from './assets/templates/SinglePage.vue'
import ShoppingCart from './assets/templates/ShoppingCart.vue'
import HeroSection from './assets/templates/HeroSection.vue'
import SiteFooter from './assets/templates/SiteFooter.vue'
import VueParallaxJs from 'vue-parallax-js'

Vue.component('SiteHeader', SiteHeader);
Vue.component('Post', Post);
Vue.component('SinglePage', SinglePage);
Vue.component('Cart', ShoppingCart);
Vue.component('Hero', HeroSection);
Vue.component('SiteFooter', SiteFooter);
Vue.use(VueParallaxJs)

new Vue({
  el: '#app',
  render: h => h(App)
})
