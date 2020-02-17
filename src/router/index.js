import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventShow from '../views/EventShow.vue'
import EventList from '../views/EventList.vue'
import User from '../views/User.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ '../views/About.vue')
  //
  {
    path: '/event/:id',
    name: 'EventShow',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
