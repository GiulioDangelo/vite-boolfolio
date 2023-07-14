<script>
import axios from 'axios';

export default {
  data() {
    return {
      arrProj:[],
      currentPage: 1,
      nPages:0,
    };
  },

  created() {
    axios.get('http://127.0.0.1:8000/api/projects')
    .then(response => this.arrProj = response.data.data)
  },
}
</script>


<template>
  <h2>progetti</h2>
  
  <div class="card" style="width: 18rem;" v-for="project in arrProj" :key="project.id">
  <img :src="project.url_image" class="card-img-top" :alt="project.id">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.content  }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</template>
  

<style lang="scss" scoped>
  
</style>