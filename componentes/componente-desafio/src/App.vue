<template>
  <v-app>
    <app-navigation/>

    <app-toolbar/>

    <app-content/>

    <app-footer/>
  </v-app>
</template>

<script>
import Navigation from "./components/template/Navigation.vue";
import Toolbar from "./components/template/Toolbar.vue";
import Content from "./components/widgets/Content.vue";
import Footer from "./components/template/Footer.vue";

export default {
  components: {
    "app-navigation": Navigation,
    "app-toolbar": Toolbar,
    "app-content": Content,
    "app-footer": Footer
  }
};
</script>
