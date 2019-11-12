import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import axios from 'axios'

// TODO: 抽象验证器
Vue.use(Vuelidate)

// TODO: instance 封装
Vue.prototype.$axios = axios
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
