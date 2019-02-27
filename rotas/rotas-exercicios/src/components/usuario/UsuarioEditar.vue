<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>ID: {{ id }}</strong></p>
    <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
    <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style>

</style>
