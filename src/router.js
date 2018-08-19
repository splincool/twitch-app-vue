import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/streams/:gameName',
      name: 'streams',
      component: () => import(/* webpackChunkName: "about" */ './views/Streams.vue')
    },
    {
      path: '/channel/:user',
      name: 'channel',
      component: () => import(/* webpackChunkName: "about" */ './views/Channel.vue')
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
