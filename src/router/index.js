import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import alertdemo from '@/components/telDemo/alertDemo'
import carouseldemo from '@/components/telDemo/carouselDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/alert',
      name: 'alert',
      component: alertdemo
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carouseldemo
    }
  ]
})
