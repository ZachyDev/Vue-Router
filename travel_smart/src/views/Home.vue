<template>
  <div class="home">
    <h1>Travel Smart__</h1>
    <div class="destinations">
      <div :key="destination.name" v-for="destination in destinations">
        <router-link :to="{name: 'DestinationDetails',params:{id: destination.id }}">{{destination.name}}</router-link>
        <figure>
          <router-link :to="{name: 'DestinationDetails',params: {id: destination.id }}">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  components: {},
  data() {
    return{
      destinations: store.destinations
    }
  }
}
</script>

<style>
.home{
  max-width: 1400px;
  margin: 50px auto;
}
.destinations{
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
img{
  max-width: 200px;
}
a{
  color: teal;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>