import Vue from 'vue'
export default new Vue({
  methods: {
    usuarioSelecionado(usuario) {
      this.$emit('usuarioSelecionou', usuario);
    },
    quandoSelecionado(callback) {
      this.$on('usuarioSelecionou', callback);
    }
  }
})