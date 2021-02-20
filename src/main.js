import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios.create({
  //接口根地址
  baseURL:"http://localhost:3001/api"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
