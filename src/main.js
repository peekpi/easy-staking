import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import store from "./vuex"
import hmy from "./js/hmy.js"

Vue.config.productionTip = false

// UI library iview's doc: https://www.iviewui.com/docs/introduce-en

new Vue({
  data: {hmy},
  router,
  store,
  render: h => h(App),
}).$mount('#app')
