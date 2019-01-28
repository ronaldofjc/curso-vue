<template>
  <v-app>
    <app-navigation/>

    <app-toolbar/>

    <app-content/>

    <app-footer/>
  </v-app>
</template>

<script>
import Navigation from "./Navigation.vue";
import Toolbar from "./Toolbar.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "app-navigation": Navigation,
    "app-toolbar": Toolbar,
    "app-content": Content,
    "app-footer": Footer
  }
};
</script>
