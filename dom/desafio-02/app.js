new Vue({
	el: '#desafio',
	data: {
		valor: ''
	},
	methods: {
		botaoClicado() {
			alert('O botao foi clicado!')
		},
		down(event) {
			return this.valor = event.target.value
		}
	}
})