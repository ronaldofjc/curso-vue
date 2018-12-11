new Vue({
  el: "#desafio",
  data: {
    nome: "Ronaldo Feitosa",
    idade: 35,
    img: "http://files.cod3r.com.br/curso-vue/vue.jpg"
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    }
  }
});
