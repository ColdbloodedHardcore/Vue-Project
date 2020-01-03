import Vue from 'vue'
import App from './App.vue'

import Post from './assets/templates/Post.vue'
import SinglePage from './assets/templates/SinglePage.vue'
import ShoppingCart from './assets/templates/ShoppingCart.vue'
import SiteHeader from './assets/templates/SiteHeader.vue'
import SiteFooter from './assets/templates/SiteFooter.vue'

Vue.component('Post', Post);
Vue.component('SinglePage', SinglePage);
Vue.component('Cart', ShoppingCart);
Vue.component('SiteHeader', SiteHeader);
Vue.component('SiteFooter', SiteFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
