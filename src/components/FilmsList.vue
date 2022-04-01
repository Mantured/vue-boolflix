<template>
  <div>
    <ul>
      <li v-for="(film, index) in filmsList" :key="index">
        {{ film.title }} - {{ film.original_title }} - {{ film.vote_average }} -
        {{ film.original_language }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmsList",
  props: {
    filmsList: String || Object, //problemi di comunicazione
  },
};
</script>

<style lang="scss" scoped></style>
