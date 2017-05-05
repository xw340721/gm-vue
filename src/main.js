// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router/'
import VueRouter from "vue-router"
import stroe from './store/'

import {Button} from "element-ui"


Vue.use(Button)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'hash',
  strict:process.env.NODE_ENV !== 'production'
})

/* eslint-disable no-new */
new Vue({
  router,
  stroe
}).$mount("#app")
