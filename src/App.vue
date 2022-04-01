<template>
  <div id="app">
    <Header @searchInput="getNewSearch" />
    <!-- <div v-for="(film, index) in filmsList" :key="index">{{ film.title }}</div> -->
    <FilmsList :filmsList="filmsList" />
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
      //moviesApi: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1&query=`,
      filmsList: "",
      searchToInput: "",
    };
  },
  /* created: function () {
    this.getNewSearch(this.moviesApi, this.searchToInput);
  }, */
  methods: {
    getNewSearch(query) {
      const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1&query=${query}`;
      axios
        .get(urlMovie)
        .then((result) => {
          this.filmsList = result.data.results;
          console.log(this.filmsList);
        })
        .catch((error) => console.error(error));
    },
    /* filmQuery(query) {
      this.searchToInput = query;
      console.warn(this.searchToInput);
    }, */
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
