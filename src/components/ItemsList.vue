<template>
  <div class="container-fluid p-4">
    <!-- <div v-if="films || series"> -->
    <div class="d-flex">
      <ul class="row overflow-auto flex-nowrap">
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
    films: Array,
    series: Array,
  },
};
</script>

<style lang="scss" scoped>
li {
  padding: 0.2rem;
  list-style-type: none;
}
</style>
