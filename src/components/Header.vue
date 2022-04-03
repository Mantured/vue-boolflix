<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
