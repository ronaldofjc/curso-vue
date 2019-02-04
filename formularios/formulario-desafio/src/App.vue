<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="usuario"/>
        <Rotulo nome="Email">
          <input type="text" v-model.lazy.trim="usuario.email">
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha">
        </Rotulo>
        <Rotulo nome="ArmazenarDados?">
          <input type="checkbox" v-model="armazenarDados">
        </Rotulo>
        <hr>
        <button class="botao" @click.prevent="enviar" v-if="armazenarDados">Enviar</button>
        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ usuario.nome }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ usuario.sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="Email">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      usuario: {
        nome: "",
        sobrenome: "",
        email: "",
        senha: ""
      },
      enviado: false,
      armazenarDados: true
    };
  },
  methods: {
    enviar() {
      this.enviado = true;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}

.botao {
  cursor: pointer;
}
</style>
