import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import en from './en.json'
import ru from './ru.json'

Vue.use(VueI18n)
const locale = 'ru'//process.env.LANG

const messages = {
	en: en,
	ru: ru,
}
console.log(process.env.LANG)
const i18n = new VueI18n({
	locale,
	messages
})
export default i18n