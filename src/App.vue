<template>
  <div id="app">
    <Header />

    <FilmsList />
  </div>
</template>

<script>
import FilmsList from "./components/FilmsList.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    FilmsList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
