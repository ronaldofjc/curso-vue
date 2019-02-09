export default {
  computed: {
    fraseComVirgulas() {
      return this.frase.replace(/\s/g, ",");
    },
    contarPalavras() {
      return this.frase
        .split(" ")
        .map(p => `${p} (${p.length})`)
        .join(" ");
    }
  },
}