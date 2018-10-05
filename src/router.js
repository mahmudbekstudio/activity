import Vue from 'vue'
import Router from 'vue-router'

import Auth from './services/Auth'
import routes from './config/routes'
import defaultMeta from './config/meta'

Vue.use(Router)



const router = new Router({
	mode: process.env.VUE_APP_ROUTER_MODE,
	base: process.env.BASE_URL,
	routes: routes.map(route => {
        route.meta = route.meta || {}

	    return {
            name: route.name,
            path: route.path,
            component: route.component,
            meta: Object.assign({}, defaultMeta, route.meta),
            beforeEnter: (to, from, next) => {
                console.log(to.matched);
                // Setup some per-page stuff.
                document.title = route.title
                /*store.dispatch('common/updateTitle', route.title)
                store.dispatch('common/updateLayout', route.layout)

                // Auth navigation guard.
                if (!route.isPublic) return guardRoute(to, from, next)*/

                next()
            }
        }
    })
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        /*if (!Auth.loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {*/
            next()
        //}
    } else {
        next() // make sure to always call next()!
    }
})

export default router