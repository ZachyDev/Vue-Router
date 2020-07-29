<template>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/kenya">Kenya</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/panama">Panama</router-link>
    </nav>
</template>

<script>
export default {
    name: "TheNavigation"
}
</script>

<style scoped>
  #nav {
    padding: 30px;
    display: flex;
    justify-content: center;
    background: #2c3e50;
    margin: -8px;

  }
  #nav a {
    font-weight: bold;
    color: #eee;
    padding: 10px;
    text-decoration: none;
  }
  #nav a.travel-smart-active-class {
    color: rgb(204, 147, 4);
  }
</style>