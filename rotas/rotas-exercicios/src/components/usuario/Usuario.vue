<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <p><strong>ID: {{ id }}</strong></p>
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    irParaInicio() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
