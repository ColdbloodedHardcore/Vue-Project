import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Pages
import HomePage from './assets/pages/HomePage.vue'
import SinglePage from './assets/pages/SinglePage.vue'
import CategoryPage from './assets/pages//CategoryPage.vue'
import ContactPage from './assets/pages/ContactPage.vue'
import CartPage from './assets/pages/CartPage.vue'
import CheckOutPage from './assets/pages/CheckOutPage.vue'

// Template Parts
import Header from './assets/templates/Header.vue'
import Hero from './assets/templates/Hero.vue'
import Products from './assets/templates/Products.vue'
import Newsletter from './assets/templates/Newsletter.vue'
import IconBox from './assets/templates/IconBox.vue'
import Slider from './assets/templates/Slider.vue'
import Footer from './assets/templates/Footer.vue'


// Pages
Vue.component('Home', HomePage);
Vue.component('Single', SinglePage);
Vue.component('Category', CategoryPage);
Vue.component('Contact', ContactPage);
Vue.component('Cart', CartPage);
Vue.component('Check', CheckOutPage);


// Template Parts
Vue.component('SiteHeader', Header);
Vue.component('Hero', Hero);
Vue.component('Slider', Slider);
Vue.component('Products', Products);
Vue.component('Newsletter', Newsletter);
Vue.component('IconBox', IconBox);
Vue.component('SiteFooter', Footer);


// Parallax
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs);

// Slider
import VueAgile from 'vue-agile'
Vue.use(VueAgile)

// Sort By



new Vue({
  router,
  render: h => h(App)
}).$mount('#shop')


