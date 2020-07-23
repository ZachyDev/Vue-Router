<template>
  <div class="home">
    <h1>Travel Smart<span>__</span></h1> 
    <div class="destinations">
      <div :key="destination.name" v-for="destination in destinations">
        <router-link :to="{ name: 'DestinationDetails',params:{ id: destination.id }}">
          {{ destination.name }}
        </router-link>
        <figure>
          <router-link :to="{name: 'DestinationDetails',params: { id: destination.id }}">
            <img :src="require(`@/assets/${ destination.image }`)" alt="destination.name">
          </router-link>
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
import store from '@/store';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>
<style scoped>
  .home{
    max-width: 1400px;
    margin: 50px auto;
  }
  .home h1{
     color: #42b983;
     font-family: Arial, Helvetica, sans-serif;
     font-size: 40px;
  }
  .home h1 span{
    color: #222;
  }
  img{
    max-width:200px;
  }
  .destinations{
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
  }
</style>