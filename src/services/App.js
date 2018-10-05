class App {
    install(Vue, options) {
        Vue.prototype.$app = this
    }
}

export default new App()