<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
		:key="mensagem.texto"
		:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input 
					type="text" size="lg" v-model="usuario.nome" placeholder="Informe seu nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail">
				<b-form-input 
					type="email" size="lg" v-model="usuario.email" placeholder="Informe seu email">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" size="lg" @click="salvar">Salvar</b-button>
			<b-button variant="success" size="lg" class="ml-2" @click="obterUsuarios">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong>{{ usuario.nome }}<br>
				<strong>Email: </strong>{{ usuario.email }}<br>
				<strong>ID: </strong>{{ id }}<br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null,
			this.mensagens = []
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Registro removido com sucesso!',
						tipo: 'warning'
					})	
				})
				.catch(() => {
					this.mensagens.push({
						texto: 'Não foi possível excluir o registro!',
						tipo: 'danger'
					})
				})
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})
				})
		},
		obterUsuarios() {
			this.$http('usuarios.json').then(res => {
				this.usuarios = res.data
			})
		}
	}
	/*created() {
		this.$http.post('usuarios.json', {
			nome: 'Maria',
			email: 'maria_maria@gmail.com'
		}).then(res => console.log(res))
	}*/
}
</script>
	
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.2rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
