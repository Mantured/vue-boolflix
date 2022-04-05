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
      genreMovie: [],
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
      const urlGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT`;
      /* const urlCast = `https://api.themoviedb.org/3/movie/353081/credits?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT`; */
      axios
        .get(urlMovie, urlTv, urlGenre)
        .then((result) => {
          this.filmsList = result.data.results;
          this.seriesLists = result.data.results;
          this.genreMovie = result.data.genre_ids;
          console.log(urlTv);
          console.log(urlMovie);
          console.log(urlGenre);
          /* console.log(urlCast); */
          /* console.log(result.data.cast); */
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
  background-color: rgb(27, 27, 27);
  font-family: Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
