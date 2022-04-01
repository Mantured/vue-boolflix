<template>
  <div id="app">
    <Header />

    <FilmsList />
  </div>
</template>

<script>
import axios from "axios";
import FilmsList from "./components/FilmsList.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    FilmsList,
  },
  data: function () {
    return {
      filmsList: [],
    };
  },
  created: function () {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1&query='adult'`
      )
      .then((result) => {
        console.log(result.data.results);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
