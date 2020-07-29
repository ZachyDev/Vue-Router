<template>
    <nav id="nav">
      <p class="logo">Travel_Smart</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">
           Home
          </router-link>
        </li>
        <li :key="destination.name" v-for="destination in destinations" class="links">
          <router-link :to="{
            name: 'DestinationDetails',
            params: {id: destination.id}
          }">
            {{destination.name}}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import store from '@/store';
export default {
  components: {},
  data() {
    return{
      destinationId: this.$route.params.id,
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
  #nav {
    display: flex;

  }
  #nav a {
  color:#2c3e50;
  text-decoration:none;
  font-weight: bold;
  }
  #nav a.travel-smart-active-class {
    color: rgb(204, 147, 4);
  }
  .nav-links{
    display: flex;
  }
  .links{
    padding-right: 20px;
    list-style-type: none;
  }
  .links:hover{
    text-decoration: underline;
  }
  .logo{
    font-size: 20px;
    color:purple;
    font-weight: bold;
  }
</style>