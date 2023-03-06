import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../view/home.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  { 
    path: '/',
    name: 'home',
    component: () => import('../view/home/index.vue') 
  },
  { 
    path: '/contact',
    name: 'contact',
    component: () => import('../view/contact/index.vue') 
  },
  { 
    path: '/fees',
    name: 'fees',
    component: () => import('../view/fees/index.vue') 
  },
  { 
    path: '/about',
    name: 'about',
    component: () => import('../view/about/index.vue') 
  },
  { 
    path: '/allCrypto',
    name: 'allCrypto',
    component: () => import('../view/market/allCrypto/index.vue') 
  },
  { 
    path: '/learnCenter',
    name: 'learnCenter',
    component: () => import('../view/learn/index.vue') 
  },
  { 
    path: '/learnList',
    name: 'learnList',
    component: () => import('../view/learn/learnList/index.vue') 
  },
  { 
    path: '/centerContent',
    name: 'centerContent',
    component: () => import('../view/learn/centerContent/index.vue') 
  },
  { 
    path: '/signup',
    name: 'signup',
    component: () => import('../view/sign/index.vue') 
  },
  { 
    path: '/login',
    name: 'login',
    component: () => import('../view/login/index.vue') 
  },
  { 
    path: '/download',
    name: 'download',
    component: () => import('../view/download/index.vue') 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
