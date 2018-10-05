import {get as getValue, set as setValue} from 'lodash'
import api from './api'

const settings = {
    defaultPage: '',
    menu: {},
    storageKey: 'activity_params',
    api: api
}

class Config {
    settings = {}
    static instance = null

    constructor(settings) {
        this.settings = settings
    }

    static getInstance(settings) {
        if(!Config.instance) {
            Config.instance = new Config(settings)
        }
        return Config.instance
    }

    get(key, defaultFalue = null) {
        return getValue(this.settings, key, defaultFalue)
    }

    set(key, val) {
        setValue(this.settings, key, val)
    }

    get api() {
        return (key) => {
            return this.get('api.' + key)
        }
    }
}

export default Config.getInstance(settings)