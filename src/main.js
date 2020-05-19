import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import './plugins/iview.js'
import store from "./vuex"
import hmy from "./js/hmy.js"

Vue.config.productionTip = false

// UI library iview's doc: https://www.iviewui.com/docs/introduce-en


window.hmy = hmy;

new Vue({
  data: { hmy },
  //  router,
  methods: {
    message(type, content) { // pop iview message
      this.$Message[type]({
        background: true,
        content,
        closable: true,
        duration: 5
      });
    },
  },
  store,
  render: h => h(App),
}).$mount('#app')
