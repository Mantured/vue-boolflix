<template>
  <div id="app">
    <Header @searchInput="getNewSearch" />
    <!-- <div v-for="(film, index) in filmsList" :key="index">{{ film.title }}</div> -->
    <ItemsList :films="filmsList" :series="seriesLists" />
  </div>
</template>

<script>
//flag icons
import axios from "axios";
import ItemsList from "./components/ItemsList.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    ItemsList,
  },
  data: function () {
    return {
      //moviesApi: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1&query=`,
      filmsList: [],
      seriesLists: [],
      searchToInput: "",
    };
  },
  /* created: function () {
    this.getNewSearch(this.moviesApi, this.searchToInput);
  }, */
  methods: {
    getNewSearch(query) {
      const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT&query=${query}`;
      const urlTv = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT&query=${query}`;
      axios
        .get(urlMovie, urlTv)
        .then((result) => {
          this.filmsList = result.data.results;
          this.seriesLists = result.data.results;
          console.log(this.filmsList);
          console.log(this.seriesLists);
          console.log(urlTv);
          console.log(urlMovie);
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
  font-family: Helvetica, Arial, sans-serif;
}
</style>
