<template>
  <div id="app">
    <Header @searchInput="filmQuery" />

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
      filmsList: "",
      searchToInput: "",
    };
  },
  created: function () {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1&query='adult'`
      )
      .then((result) => {
        this.filmsList = result.data.results;
        console.log(this.filmsList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    filmQuery(query) {
      this.searchToInput = query;
      console.warn(this.searchToInput);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
