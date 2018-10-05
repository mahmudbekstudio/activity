import axios from 'axios'
import Config from '../config/config'

class Http {
    axios = null
    api = null
    config = null

    constructor(axios, config) {
        this.axios = axios
        this.api = config.api
        this.config = config
    }

    install(Vue) {
        Vue.prototype.$http = this
    }

    test() {
        return this.api('test.method')
    }
}

export default new Http(axios, Config)