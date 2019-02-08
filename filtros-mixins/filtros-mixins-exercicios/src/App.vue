<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpf | cpf">
    <hr>
    <Frutas/>
    <hr>
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
import usuarioMixin from "./usuarioMixin";
import frutasMixin from "./frutasMixin";
import Frutas from "./Frutas.vue";

export default {
  components: { Frutas },
  mixins: [frutasMixin, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpf: "33333333333",
      frutas: ["abacate"]
    };
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  font-size: 2rem;
}

input {
  font-size: 2rem;
}
</style>
