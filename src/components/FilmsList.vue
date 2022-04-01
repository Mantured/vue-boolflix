<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "FilmsList",
  components: {},
  data: function () {
    return {
      filmsList: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&page=1&include_adult=false"
      )
      .then((result) => {
        console.log(result.data);
      });
  },
};
</script>

<style lang="scss" scoped></style>
