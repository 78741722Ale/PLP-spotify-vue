import Vue from 'vue'
import App from './App.vue'
/* Import di Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
