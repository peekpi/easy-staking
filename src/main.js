import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import SvgIcon from 'vue-svgicon'
import store from "./vuex"
import hmy from "./js/hmy.js"

Vue.config.productionTip = false

Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

new Vue({
  data: {hmy},
  router,
  store,
  render: h => h(App),
}).$mount('#app')
