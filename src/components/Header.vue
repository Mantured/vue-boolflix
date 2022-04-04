<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid h-100">
      <div class="h-100 d-flex">
        <a class="navbar-brand" href="https://www.netflix.com"
          ><img src="../assets/images/netflix-logo.png" alt="Netflix Logo"
        /></a>
        <div class="links">
          <ul class="list-links">
            <li v-for="(link, index) in links" :key="index">
              <a :class="{ active: link.active == true }" href="#">{{
                link.text
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          v-model.trim="searchToInput"
          aria-label="Search"
          @keyup="$emit('searchInput', searchToInput)"
        />
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        <font-awesome-icon
          class="btn text-white"
          icon="fa-solid fa-magnifying-glass"
          @click="$emit('searchInput', searchToInput)"
        />
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
          active: true,
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
      /* currentLinks: "Tv Shows", */
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  height: 10vh;
  background-color: rgb(0, 0, 0);
  .navbar-brand {
    height: 100%;
    img {
      height: 100%;
    }
  }
  .links {
    display: flex;
    align-items: center;
    height: 100%;
    ul.list-links {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        margin-right: 0.6rem;
        font-size: 0.8rem;
        font-weight: 600;
        a {
          text-decoration: none;
          color: grey;
          &.active {
            color: white;
          }
        }
      }
    }
  }
  input {
    height: 30px;
  }
}
</style>
