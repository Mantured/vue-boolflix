<template>
  <div class="card my-size mb-3" style="width: 20rem">
    <img :src="imgUrl(info.poster_path)" class="card-img-top" alt="" />
    <!-- <img src="" class="card-img-top" alt="" /> -->
    <div class="card-body">
      <h5 class="card-title">{{ info.title || info.name }}</h5>
      <!-- <h5 class="card-title">{{ info.name }}</h5> -->
      <p class="card-text">
        {{ info.original_title || info.original_name }}
        <!-- {{ info.original_name }} -->
      </p>
      <country-flag :country="getFlag(info.original_language)" size="normal" />
      <p class="card-text">{{ voteInt(info.vote_average) }}</p>
      <font-awesome-icon icon="fa-solid fa-star" />
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
      // ? ricordarsi di inserire una condizione che se poster = null mettiamo le iniziali
      return `https://image.tmdb.org/t/p/w500/${poster}`;
    },
    getFlag(lang) {
      let initials = "";
      if (lang === "en") initials = "gb";
      else if (lang === "ko") initials = "kp";
      else if (lang === "ja") initials = "jp";
      else initials = lang;
      return initials;
    },
    voteInt(star) {
      /* return console.log(Math.ceil(star)); */
      return Math.ceil(star / 2);
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
