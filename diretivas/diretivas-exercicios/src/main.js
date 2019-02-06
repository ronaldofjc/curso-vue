import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding) {
		//el.style.backgroundColor = 'lightGreen'
		el.style.backgroundColor = binding.value
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
