import './index.pug'
import './app.sass'

import Vue from 'vue'
import App from './app.vue'

import fs from 'fs'

new Vue({
  el: '#v-app',
  render: h => h(App)
})
