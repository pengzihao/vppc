/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Product from '@/components/product/product'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { //根路径(重定向Home)
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product/product',
      component: Product
    }
  ]
})
