<template>
  <div class="container-fluid">
    <ul class="row">
      <li class="col" v-for="(film, index) in films" :key="index">
        <!-- {{ film.title }} - {{ film.original_title }} - {{ film.vote_average }} -
        {{ film.original_language }} -->
        <ProductCover :info="film" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCover from "./ProductCover.vue";
export default {
  name: "FilmsList",
  components: {
    ProductCover,
  },
  props: {
    films: Array, //problemi di comunicazione //risolto
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>
