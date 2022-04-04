<template>
  <div class="card my-size mb-3 position-relative" style="width: 20rem">
    <img :src="imgUrl(info.poster_path)" class="card-img-top" alt="" />
    <!-- <img src="" class="card-img-top" alt="" /> -->
    <div class="card-body position-absolute">
      <h5 class="card-title">Titolo : {{ info.title || info.name }}</h5>
      <!-- <h5 class="card-title">{{ info.name }}</h5> -->
      <p class="card-text">
        Titolo originale : {{ info.original_title || info.original_name }}
        <!-- {{ info.original_name }} -->
      </p>
      <country-flag :country="getFlag(info.original_language)" size="normal" />
      <span v-for="i in voteInt(info.vote_average)" :key="i + 'abc1'">
        <font-awesome-icon class="yellow" icon="fa-solid fa-star" />
      </span>
      <!-- problema dopppia key -->
      <span v-for="n in 5 - voteInt(info.vote_average)" :key="n + 'abc2'">
        <font-awesome-icon icon="fa-solid fa-star" />
      </span>
      <p>{{ info.overview }}</p>
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
      return `https://image.tmdb.org/t/p/w342/${poster}`;
    },
    getFlag(lang) {
      let initials = "";
      if (lang === "en") initials = "gb";
      else if (lang === "ko") initials = "kp";
      else if (lang === "ja") initials = "jp";
      else if (lang === "zh") initials = "cn";
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
  .card-body {
    display: none;
  }
}
.card:hover .card-body {
  display: block;
  height: 100%;
  background-color: rgb(20, 20, 20);
  color: white;
  .yellow {
    color: rgb(239, 212, 11);
  }
}
</style>
