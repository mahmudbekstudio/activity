import Vue from 'vue'

import {App as AppComponent} from './App.vue'
import router from './router'
import store from './store'
import i18n from './translations/index'
import Http from './services/Http'
import Auth from './services/Auth'
import App from './services/App'
import './material'

Vue.config.productionTip = false
Vue.use(Http)
Vue.use(Auth)
Vue.use(App)

new Vue({
    router,
    store,
    i18n,
    render: h => h(AppComponent)
}).$mount('#app')
