import Vue from 'vue'
import App from './App.vue'
/* Import of Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
/* Import of Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* Add icons to the library */
library.add(faUserSecret, faTwitter, faLinkedin, faFacebook, faCopyright)
/* Add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
