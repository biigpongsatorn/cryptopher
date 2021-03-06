// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import './assets/css/main.css'
import './assets/font-awesome/css/font-awesome.min.css'

Vue.use(Buefy)
Vue.use(Vuex)

moment.locale('th')

Vue.prototype['moment'] = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
