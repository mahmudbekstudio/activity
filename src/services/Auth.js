class Auth {
    install(Vue, options) {
        Vue.prototype.$auth = this
    }

    isLogged() {
        //
    }

    login() {
        //
    }

    logout() {
        //
    }
}

export default new Auth()