import Vue from 'vue'
import Router from 'vue-router'
import Species from '@/components/Species'
import Profile from '@/components/Profile'
import Callback from '@/components/Callback'

import auth from './../auth/authService'

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/Species',
            name: 'Species',
            component: Species
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/callback',
            name: 'callback',
            component: Callback
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
      return next();
    }
    
    auth.login({ target: to.path });
});

export default router;