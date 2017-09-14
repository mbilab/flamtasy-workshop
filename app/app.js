import './index.pug'
import './app.sass'
import './assets/img/logo.png'

import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#v-app',
  render: h => h(App)
})
