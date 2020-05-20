import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import UserInfo from '@/pages/UserInfo/UserInfo'
import SearchDetail from '@/pages/SearchDetail/SearchDetail'
import ShopDetail from '@/pages/ShopDetail/ShopDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home',
      meta:{
        showFooter:true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/searchdetail',
      name: 'SearchDetail',
      component: SearchDetail
    },
    {
      path: '/shopdetail',
      name: 'ShopDetail',
      component: ShopDetail
    },
  ]
})
