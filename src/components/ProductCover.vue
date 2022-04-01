<template>
  <div class="card" style="width: 18rem">
    <!-- <img :src="imgUrl(info.poster_path)" class="card-img-top" alt="" /> -->
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ info.title }}</h5>
      <p class="card-text">
        {{ info.original_title }}
      </p>
      <p class="card-text">{{ info.original_language }}</p>
      <p class="card-text">{{ info.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCover",
  props: {
    info: Object,
  },
  methods: {
    /* imgUrl(poster) {
      return `https://image.tmdb.org/t/p/${poster}`;
    }, */
  },
};
</script>

<style></style>
