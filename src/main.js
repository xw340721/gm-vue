// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/'
import VueRouter from "vue-router"

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
}).$mount("#app")
