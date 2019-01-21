import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/report',
      name: 'report',
      component: require('@/components/Report').default
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: require('@/components/KeyWord').default
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: require('@/components/Alarm').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
