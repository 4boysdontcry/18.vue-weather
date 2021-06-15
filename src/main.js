import Vue from 'vue'
import App from './App.vue'
import router from './router'		// router/index.js 에서 export한 라우터를 불러옴
import store from './store'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
