import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes,
}).$mount('#app')
