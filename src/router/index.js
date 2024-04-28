import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tutorial',
      name: '从零开始搭建Vue项目',
      component: () => import('@/views/tutorial/index'),
    }
  ]
})
