import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import store from "./vuex"
import hmy from "./js/hmy.js"

Vue.config.productionTip = false


new Vue({
  data: {hmy},
  router,
  store,
  render: h => h(App),
}).$mount('#app')
