import Vue from 'vue'
import App from './App.vue'

/**
 * 兼容低版本安坐，转换vw的单位
 */
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')

require('viewport-units-buggyfill').init({
  hacks: hacks
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
