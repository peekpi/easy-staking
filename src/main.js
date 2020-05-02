import Vue from 'vue'
import App from './App.vue'

import hmy from "./js/hmy.js"

Vue.config.productionTip = false

new Vue({
  data: {hmy},
  render: h => h(App),
}).$mount('#app')
