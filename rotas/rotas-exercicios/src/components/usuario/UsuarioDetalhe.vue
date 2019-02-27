<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>ID: {{ id }}</strong></p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" 
      :to="{ name: 'editarUsuario', params: { id }, 
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape' }" primario>
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  /*data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id
    }
  },*/
}
</script>

<style>

</style>
