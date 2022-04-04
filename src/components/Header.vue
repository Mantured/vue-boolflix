<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.netflix.com"
        ><img src="../assets/images/netflix-logo.png" alt="Netflix Logo"
      /></a>
      <div>
        <ul class="list-links">
          <li v-for="(link, index) in links" :key="index">
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          v-model.trim="searchToInput"
          aria-label="Search"
          @keyup="$emit('searchInput', searchToInput)"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {},
  data: function () {
    return {
      searchToInput: "",
      links: [
        {
          text: "Home",
          active: false,
        },
        {
          text: "Tv Shows",
          active: false,
        },
        {
          text: "Movies",
          active: false,
        },
        {
          text: "New & Popular",
          active: false,
        },
        {
          text: "My List",
          active: false,
        },
        {
          text: "Audio & Subtitles",
          active: false,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: rgb(0, 0, 0);
  .navbar-brand {
    img {
      width: 250px;
      height: 65px;
      transform: scale(1.4);
    }
  }
  .list-links {
    display: flex;
    align-items: center;
    list-style-type: none;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
