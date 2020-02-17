import Vue from 'vue'
import VueRouter from 'vue-router';//For vue-router
import App from './App.vue'
//For vuex
//import Vuex from 'vuex'
//Vue.use(Vuex)
// import storeData from './components/store/index'
// const store = new Vuex.Store({
//     storeData
// })
import store from './store'

import {routes} from './routes'//For vue-router

Vue.use(VueRouter);//For vue-router

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
