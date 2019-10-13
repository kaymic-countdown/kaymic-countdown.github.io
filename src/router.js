import Vue from 'vue'
import Router from 'vue-router'
import Form from './views/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/:year/:month?/:date?/:hour?/:minute?/:second?',
      name: 'counter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "counter" */ './views/Counter.vue')
    }
  ]
})
