import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import wangEditorDemo1 from '../components/wangEditor/wangEditorDemo1.vue'
import baiduMapDemo1 from '../components/baiduMap/baiduMapDemo1.vue'
import mavonEditorDemo1 from '../components/mavonEditor/mavonEditorDemo1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wangEditorDemo1',
    component: wangEditorDemo1
  },
  {
    path: '/baiduMapDemo1',
    component: baiduMapDemo1
  },
  {
    path: '/mavonEditorDemo1',
    component: mavonEditorDemo1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
