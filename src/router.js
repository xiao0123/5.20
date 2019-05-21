import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Pin from './views/Pin.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/category',
      name: 'category',
      component: Category
    },{
      path: '/pin',
      name: 'pin',
      component: Pin
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },{
      path: '/user',
      name: 'user',
      component: User
    }]
})
