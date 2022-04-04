<template>
  <div class="container-fluid p-4 my-bg">
    <!-- <div v-if="films || series"> -->
    <div>
      <ul class="row">
        <li class="col" v-for="(item, index) in films || series" :key="index">
          <!-- <li class="col" v-for="(item, index) in series" :key="index"> -->
          <!-- {{ film.title }} - {{ film.original_title }} - {{ film.vote_average }} -
        {{ film.original_language }} -->
          <ProductCover :info="item" />
        </li>
      </ul>
    </div>
    <!-- <h1>Nessun Film trovato</h1> -->
  </div>
</template>

<script>
import ProductCover from "./ProductCover.vue";
export default {
  name: "ItemsList",
  components: {
    ProductCover,
  },
  props: {
    films: Array, //problemi di comunicazione //risolto
    series: Array,
  },
};
</script>

<style lang="scss" scoped>
.my-bg {
  background-color: rgb(27, 27, 27);
}
li {
  list-style-type: none;
}
</style>
