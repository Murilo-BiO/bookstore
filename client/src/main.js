import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './assets/sass/app.scss'

import { routes } from './routes';
import App from './App.vue'
import { Http, store, Logger, Auth, Cart } from './common';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

UIkit.use(Icons)

const main = async () => {
	Vue.prototype.$http = Http
	Vue.prototype.$auth = Auth
	Vue.prototype.$cart = Cart
	Vue.prototype.$alert = UIkit.notification

	try {
		await Auth.load()
	} catch (e) {
		Logger.log(e)
	}

	const app = new Vue({
		render: h => h(App),
		store,
		router: new VueRouter(routes)
	})
	app.$mount('#app')
}

main().catch(Logger.log)
