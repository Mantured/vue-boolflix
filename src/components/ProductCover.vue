<template>
  <div class="card my-size mb-3 position-relative" style="width: 25rem">
    <img :src="imgUrl(info.poster_path)" class="card-img-top" alt="" />
    <!-- <img src="" class="card-img-top" alt="" /> -->
    <div class="card-body position-absolute">
      <h5 class="card-title">Titolo : {{ info.title || info.name }}</h5>
      <!-- <h5 class="card-title">{{ info.name }}</h5> -->
      <p class="card-text">
        Titolo originale : {{ info.original_title || info.original_name }}
        <!-- {{ info.original_name }} -->
      </p>
      <pre><country-flag :country="getFlag(info.original_language)" size="normal" /></pre>
      <span v-for="i in voteInt(info.vote_average)" :key="i + 'abc1'">
        <font-awesome-icon class="yellow mb-3" icon="fa-solid fa-star" />
      </span>
      <!-- problema dopppia key -->
      <span v-for="n in 5 - voteInt(info.vote_average)" :key="n + 'abc2'">
        <font-awesome-icon class="mb-3" icon="fa-solid fa-star" />
      </span>
      <p>{{ info.overview }}</p>
      <p class="card-text">{{ getActors() }}</p>
      <p>{{ info.id }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductCover",
  props: {
    info: Object,
  },
  data: function () {
    return {
      /* actorsMovieList: [],
      actorsSeriesList: [], */
      actor: null,
    };
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
    getActors() {
      return this.actor;
    },
  },
  created() {
    //const urlCast = `https://api.themoviedb.org/3/movie/${this.info.id}/credits?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT`;
    /* const urlCastTv = `https://api.themoviedb.org/3/tv/${this.info.id}/credits?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT`; */
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.info.id}/credits?api_key=${process.env.VUE_APP_APIKEY}&language=it-IT`
      )
      .then((result) => {
        this.actor = result.data.cast.slice(0, 5).map((actor) => {
          return actor.name;
        });
        /* this.actorsMovieList = result.data.cast;
        this.actorsSeriesList = result.data.cast; */
        /* console.log(urlCast); */
        /* console.log(urlCastTv); */
        console.log(this.info.id);
        this.actor = this.actor.join(", ");
      });
  },
  /*   watch: {

  } */
};
</script>

<style lang="scss" scoped>
//flag icons
@import "../assets/scss/style.scss";
.my-size {
  height: 70vh;
  border: transparent;
  img {
    height: 100%;
  }
  .card-body {
    display: none;
  }
}
.card:hover .card-body {
  width: 100%;
  height: 100%;
  display: block;
  color: white;
  overflow: auto;
  background-color: rgb(20, 20, 20);
  .yellow {
    color: rgb(239, 212, 11);
  }
}
</style>
