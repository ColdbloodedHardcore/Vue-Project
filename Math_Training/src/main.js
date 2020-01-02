import Vue from 'vue'
import App from './App.vue'

import StartScreen from './templates/StartScreen.vue';
import Settings from './templates/Settings.vue';
import Question from './templates/Question.vue';
import Message from './templates/Message.vue';
import ResultScreen from './templates/ResultScreen.vue';
import Dashboard from './templates/Dashboard.vue';

Vue.component('StartScreen', StartScreen);
Vue.component('Settings', Settings);
Vue.component('Question', Question);
Vue.component('Message', Message);
Vue.component('ResultScreen', ResultScreen);
Vue.component('Dashboard', Dashboard);


new Vue({
  el: '#app',
  render: h => h(App)
})
