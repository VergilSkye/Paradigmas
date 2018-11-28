import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UsersPage from '@/components/UsersPage'
import AnimalsPage from '@/components/AnimalsPage'
import LocalsPage from '@/components/LocalsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'UsersPage',
      component: UsersPage
    },
    {
      path: '/local',
      name: 'LocalsPage',
      component: LocalsPage
    },
    {
      path: '/animals',
      name: 'AnimalsPage',
      component: AnimalsPage
    }
  ]
})
