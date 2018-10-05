import {
    Login,
    Activities,
    NotFound
} from '../views/pages'

const routes = [
    {
        path: '/',
        name: 'activities',
        component: Activities,
        title: 'Activities',
        layout: 'Main',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        title: 'Login',
        layout: 'Auth'
    },
    {
        path: '*',
        name: 'notfound',
        component: NotFound,
        title: 'Not Found',
        meta: {
            requiresAuth: true
        }
    }
]

export default routes