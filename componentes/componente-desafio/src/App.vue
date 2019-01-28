<template>
  <v-app>
    <Navigation/>

    <Toolbar/>

    <Content/>

    <Footer/>
  </v-app>
</template>

<script>
import Navigation from "./components/template/Navigation.vue";
import Toolbar from "./components/template/Toolbar.vue";
import Content from "./components/widgets/Content.vue";
import Footer from "./components/template/Footer.vue";

export default {
  components: {
    Navigation,
    Toolbar,
    Content,
    Footer
  }
};
</script>
