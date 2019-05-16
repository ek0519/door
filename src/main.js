import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(Vuetify)
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API
new Vue({
  render: h => h(App),
}).$mount('#app')
