import '!file-loader?name=index.html!extract-loader!html-loader!pug-html-loader!./index.pug'

import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#v-app',
  render: h => h(App)
})
