import Vue from 'vue'
import VueRouter from 'vue-router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './assets/sass/app.scss'

import { routes } from './routes';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

UIkit.use(Icons)

new Vue({
	render: h => h(App),
	router: new VueRouter(routes)
}).$mount('#app')
