// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueImg from '../node_modules/v-img/dist/v-img'
Vue.config.productionTip = false

Vue.use(VueImg, {
  altAsTitle: false,
  sourceButton: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
