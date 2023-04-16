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
  { 
    path: '/password',
    name: 'password',
    component: () => import('../view/password/forgot/index.vue') 
  },
  { 
    path: '/update',
    name: 'update',
    component: () => import('../view/password/update/index.vue') 
  },
  { 
    path: '/updated',
    name: 'updated',
    component: () => import('../view/password/updated/index.vue') 
  },
  { 
    path: '/convert',
    name: 'convert',
    component: () => import('../view/convert/index.vue') 
  },

  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../view/wallet/index.vue') ,
    children: [
      {
        path: '',
        name: 'walletOverview',
        component: () => import('../view/wallet/layout/OverView/OverView.vue'),
        meta: { tab: 'first' } // 设置meta信息，用于在mounted钩子函数中设置activeName
      },
      {
        path: 'trading',
        name: 'walletTrading',
        component: () => import('../view/wallet/layout/Trading/Trading.vue'),
        meta: { tab: 'second' }
      },
      {
        path: 'earning',
        name: 'walletEarning',
        component: () => import('../view/wallet/layout/OverView/OverView.vue'),
        meta: { tab: 'third' }
      },
      {
        path: 'history',
        name: 'walletHistory',
        component: () => import('../view/wallet/layout/OverView/OverView.vue'),
        meta: { tab: 'fourth' },
        children: [
          {
            path: '',
            name: 'walletHistoryDepositWithdraw',
            component: () => import('../view/wallet/layout/History/modules/DepositWithdraw/DepositWithdraw.vue'),
            meta: { tabs: 'first' } // 设置meta信息，用于在mounted钩子函数中设置activeName

          },
          {
            path: 'buy-sell',
            name: 'walletHistoryBuySell',
            component: () => import('../view/wallet/layout/History/modules/BuySell/BuySell.vue'),
            meta: { tabs: 'second' }

          },
          {
            path: 'convert', 
            name: 'walletHistoryConvert',
            component: () => import('../view/wallet/layout/History/modules/Convert/Convert.vue'),
            meta: { tabs: 'third' }

          },
          {
            path: 'spot',
            name: 'walletHistorySpot',
            component: () => import('../view/wallet/layout/History/modules/Spot/Spot.vue'),
            meta: { tabs: 'fourth' },

          }
        ]
      },
      {
        path: 'account',
        name: 'walletAccount',
        component: () => import('../view/wallet/layout/OverView/OverView.vue'),
        meta: { tab: 'fifth' }
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../view/test/test1/test1.vue') 
  },
  { 
    path: '/user',
    name: 'user',
    component: () => import('../view/user/index.vue') 
  },
  { 
    path: '/trade',
    name: 'trade',
    component: () => import('../view/trade/index.vue') 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
