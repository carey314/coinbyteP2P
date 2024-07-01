import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/au'
    },
    {
        path: '/nz',
        component: () => import('../view/home/index.vue')
    },
    {
        path: '/au',
        component: () => import('../view/home/index.vue')
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../view/contact/index.vue')
    // },
    {
        path: '/contact',
        redirect: '/au/contact'
    },
    {
        path: '/nz/contact',
        component: () => import('../view/contact/index.vue')
    },
    {
        path: '/au/contact',
        name: 'contact',
        component: () => import('../view/contact/index.vue')
    },
    {
        path: '/fees',
        name: 'fees',
        component: () => import('../view/fees/index.vue')
    },
    {
        path: '/kyc',
        name: 'kyc',
        component: () => import('../view/kyc/index.vue')
    },
    {
        path: '/about',
        redirect: '/au/about'
    },
    {
        path: '/nz/about',
        component: () => import('../view/about/index.vue')
    },
    {
        path: '/au/about',
        name: 'about',
        component: () => import('../view/about/index.vue')
    },
    {
        path: '/market-allCrypto',
        name: 'allCrypto',
        component: () => import('../view/market/allCrypto/index.vue')
    },
    {
        path: '/market-favorite',
        name: 'favorite',
        component: () => import('../view/market/favorite/index.vue')
    },
    {
        path: '/market-spot',
        name: 'spot',
        component: () => import('../view/market/spot/index.vue')
    },
    // {
    //     path: '/learnCenter',
    //     name: 'learnCenter',
    //     component: () => import('../view/learn/index.vue')
    // },
    {
        path: '/learnCenter',
        redirect: '/au/learnCenter'
    },
    {
        path: '/nz/learnCenter',
        component: () => import('../view/learn/index.vue')
    },
    {
        path: '/au/learnCenter',
        component: () => import('../view/learn/index.vue')
    },

    {
        path: '/learnList',
        redirect: '/au/learnList'
    },
    {
        path: '/nz/learnList',
        component: () => import('../view/learn/learnList/index.vue')
    },
    {
        path: '/au/learnList',
        component: () => import('../view/learn/learnList/index.vue')
    },

    // {
    //     path: '/au/learnList',
    //     name: 'learnList',
    //     component: () => import('../view/learn/learnList/index.vue')
    // },
    {
        path: '/centerContent/:id?',
        name: 'centerContent',
        component: () => import('../view/learn/centerContent/index.vue')
    },
    {
        path: '/noticesList',
        name: 'noticesList',
        component: () => import('../view/notices/index.vue')
    },
    {
        path: '/noticeContent',
        name: 'noticeContent',
        component: () => import('../view/notices/noticeContent/index.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../view/sign/index.vue')
    },
    {
        path: '/signupsuccess',
        name: 'signupsuccess',
        component: () => import('../view/signupSuccess/index.vue')
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('../view/login/index.vue'),
    //     meta: {requiresAuth: false}
    // },
    {
        path: '/login',
        redirect: '/au/login'
    },
    {
        name: 'login',
        path: '/nz/login',
        component: () => import('../view/login/index.vue')
    },
    {
        name: 'login',
        path: '/au/login',
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
        path: "/wallet",
        name: "wallet",
        component: () => import("../view/wallet/index.vue"),
        children: [
            {
                path: "",
                name: "walletOverview",
                component: () => import("../view/wallet/layout/OverView/OverView.vue"),
                meta: {tab: "first"},
            },
            {
                path: "trading",
                name: "walletTrading",
                component: () => import("../view/wallet/layout/Trading/Trading.vue"),
                meta: {tab: "second"},
            },
            {
                path: "transaction",
                name: "walletTransaction",
                component: () => import("../view/wallet/layout/OverView/OverView.vue"),
                meta: {tab: "first", isTransaction: true},
                children: [],
            },

            {
                path: 'depositFiat',
                name: 'DepositFiat',
                meta: {tab: "first", isTransaction: true},
                component: () => import('../view/transaction/layout/OverView/DepositFiat.vue'),
            },
            {
                path: 'withdrawFiat',
                name: 'WithdrawFiat',
                meta: {tab: "first", isTransaction: true},
                component: () => import('../view/transaction/layout/OverView/WithdrawFiat.vue'),
            },
            {
                path: 'withdrawCrypto',
                name: 'WithdrawCrypto',
                meta: {tab: "first", isTransaction: true},
                component: () => import('../view/transaction/layout/OverView/WithdrawCrypto.vue'),
            },
            {
                path: "earning",
                name: "walletEarning",
                component: () => import("../view/wallet/layout/OverView/OverView.vue"),
                meta: {tab: "third"},
            },
            {
                path: "history",
                name: "walletHistory",
                component: () => import("../view/wallet/layout/OverView/OverView.vue"),
                meta: {tab: "fourth"},
                children: [
                    {
                        path: "",
                        name: "walletHistoryDepositWithdraw",
                        component: () =>
                            import(
                                "../view/wallet/layout/History/modules/DepositWithdraw/DepositWithdraw.vue"
                                ),
                        meta: {tabs: "first"},
                    },
                    {
                        path: "buy-sell",
                        name: "walletHistoryBuySell",
                        component: () =>
                            import(
                                "../view/wallet/layout/History/modules/BuySell/BuySell.vue"
                                ),
                        meta: {tabs: "second"},
                    },
                    {
                        path: "convert",
                        name: "walletHistoryConvert",
                        component: () =>
                            import(
                                "../view/wallet/layout/History/modules/Convert/Convert.vue"
                                ),
                        meta: {tabs: "third"},
                    },
                    {
                        path: "spot",
                        name: "walletHistorySpot",
                        component: () =>
                            import(
                                "../view/wallet/layout/History/modules/Spot/Spot.vue"
                                ),
                        meta: {tabs: "fourth"},
                    },

                    {
                        path: "transaction/DepositFiat",
                        name: "walletHistoryDepositFiat",
                        component: () =>
                            import("../view/transaction/layout/OverView/DepositFiat.vue"),
                        meta: {tabs: "first"},
                    },
                    {
                        path: "transaction/WithdrawFiat",
                        name: "walletHistoryWithdrawFiat",
                        component: () =>
                            import(
                                "../view/transaction/layout/OverView/WithdrawFiat.vue"
                                ),
                        meta: {tabs: "first"},
                    },
                    {
                        path: "transaction/WithdrawCrypto",
                        name: "walletHistoryWithdrawCrypto",
                        component: () =>
                            import(
                                "../view/transaction/layout/OverView/WithdrawCrypto.vue"
                                ),
                        meta: {tabs: "first"},
                    },
                ],
            },
            {
                path: "account",
                name: "walletAccount",
                component: () => import("../view/wallet/layout/OverView/OverView.vue"),
                meta: {tab: "fifth"},
            },
        ],
    },
    {
        path: '/transaction',
        name: 'transaction',
        meta: { requiresAuth: true }, 
        component: () => import('../view/transaction/index.vue'),
        children: [

            {
                path: 'DepositFiat',
                name: 'transaction/DepositFiat',
                meta: {tab: "first"},
                component: () => import('../view/transaction/layout/OverView/DepositFiat.vue'),
            },
            {
                path: 'WithdrawFiat',
                name: 'transaction/WithdrawFiat',
                meta: {tab: "first"},
                component: () => import('../view/transaction/layout/OverView/WithdrawFiat.vue'),
            },
            {
                path: 'WithdrawCrypto',
                name: 'transaction/WithdrawCrypto',
                meta: {tab: "first"},
                component: () => import('../view/transaction/layout/OverView/WithdrawCrypto.vue'),
            },
        ],
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../view/test/test1/test1.vue'),
    },
    {
        path: "/user",
        name: "user",
        meta: { requiresAuth: true }, 
        component: () => import("../view/user/index.vue"),
        children: [
            {
                path: '/user',
                redirect: '/au/user' // 添加重定向路由，将 /user 重定向到 /au/user
            },
            {
                path: '/au/user',
                name: 'overviewAu',
                component: () => import("../view/user/layout/OverView/OverView.vue"),
                meta: { tab: 'first' } // 设置meta信息，用于在mounted钩子函数中设置activeName
            },
            {
                path: '/nz/user',
                name: 'overviewNz',
                component: () => import("../view/user/layout/OverView/OverView.vue"),
                meta: { tab: 'first' } // 设置meta信息，用于在mounted钩子函数中设置activeName
            },
            {
                path: '/user/depositFiat',
                redirect: '/au/user/depositFiat' // 添加重定向路由，将 /user 重定向到 /au/user
            },
            {
                path: '/au/user/depositFiat',
                name: 'depositFiatAu',
                meta: { tab: "second", isTransaction: true },
                component: () => import('../view/transaction/layout/OverView/DepositFiat.vue')
            },
            {
                path: '/nz/user/depositFiat',
                name: 'depositFiatNz',
                meta: { tab: "second", isTransaction: true },
                component: () => import('../view/transaction/layout/OverView/DepositFiat.vue')
            },
            {
                path: '/user/verification',
                redirect: '/au/user/verification'
            },
            {
                path: '/au/user/verification',
                name: 'verificationAu',
                component: () => import("../view/transaction/layout/OverView/WithdrawFiat.vue"),
                meta: { tab: 'third' }
            },
            {
                path: '/nz/user/verification',
                name: 'verificationNz',
                component: () => import("../view/transaction/layout/OverView/WithdrawFiat.vue"),
                meta: { tab: 'third' }
            },
            {
                path: '/user/bankaccount',
                redirect: '/au/user/bankaccount'
            },
            {
                path: '/au/user/bankaccount',
                name: 'bankaccountAu',
                component: () => import("../view/user/layout/BankAccount/BankAccount.vue"),
                meta: { tab: 'fourth' },
            },
            {
                path: '/nz/user/bankaccount',
                name: 'bankaccountNz',
                component: () => import("../view/user/layout/BankAccount/BankAccount.vue"),
                meta: { tab: 'fourth' },
            },
            {
                path: '/user/accountstatement',
                redirect: '/au/user/accountstatement'
            },
            {
                path: '/au/user/accountstatement',
                name: 'accountstatementAu',
                component: () => import("../view/user/layout/AccountStatement/AccountStatement.vue"),
                meta: { tab: 'fifth' }
            },
            {
                path: '/nz/user/accountstatement',
                name: 'accountstatementNz',
                component: () => import("../view/user/layout/AccountStatement/AccountStatement.vue"),
                meta: { tab: 'fifth' }
            },
        ],
    },
    {
        path: '/trade/:id?',
        name: 'trade',
        component: () => import('../view/trade/index.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const useInfo = localStorage.getItem('useInfo');
    let token = null;
    if (useInfo) {
        try {
            const parsedInfo = JSON.parse(useInfo);
            token = parsedInfo.token;
        } catch (e) {
            console.error('Error parsing useInfo from localStorage:', e);
        }
    }
    console.log('Token from localStorage:', token);
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        console.log('No token found, redirecting to login.');  // 调试输出，无token时的情况
        next('/login');
    } else {
        next();
    }
});
export default router;
