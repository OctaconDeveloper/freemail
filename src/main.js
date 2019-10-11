import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

 
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
//const axios = require('axios').default;
new Vue({
  render: h => h(App), router, axios
}).$mount('#app')
