<template>
  <div class="home">
    <img alt="Travel Smart" src="../assets/logo.jpg" />
    <h1>All Destinations</h1>
    <div class="destinations">
      <div :key="destination.name" v-for="destination in destinations">
        <router-link :to="destination.slug"> 
          {{ destination.name }}
        </router-link>
        <figure>
          <router-link :to="destination.slug">
            <img :src="require(`@/assets/${ destination.image }`)" :alt="destination.name">
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';
export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style>
.home{
  max-width: 1400px;
  margin: 0 auto;
}
img{
  max-width:200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}

</style>
