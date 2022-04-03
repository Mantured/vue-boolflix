<template>
  <div class="card my-size mb-3" style="width: 18rem">
    <img :src="imgUrl(info.poster_path)" class="card-img-top" alt="" />
    <!-- <img src="" class="card-img-top" alt="" /> -->
    <div class="card-body">
      <h5 class="card-title">{{ info.title }}</h5>
      <p class="card-text">
        {{ info.original_title }}
      </p>
      <span :class="getFlag(info.original_language)">{{
        info.original_language
      }}</span>
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
    imgUrl(poster) {
      return `https://image.tmdb.org/t/p/w500/${poster}`;
    },
    getFlag(lang) {
      let src = "flag-icon flag-icon-";
      if (lang === "en") src += "gb";
      else src += lang;
      return src;
    },
  },
};
</script>

<style lang="scss" scoped>
//flag icons
@import "../assets/scss/style.scss";
.my-size {
  height: 70vh;
  img {
    height: 100%;
  }
}
</style>
