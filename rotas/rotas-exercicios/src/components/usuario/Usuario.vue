<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view />
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
