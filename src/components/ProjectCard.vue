<script>
import axios from "axios"

export default {
    props:['project'],
}
</script>

<template>
    <div
      class="card mt-4"
      style="width: 18rem"
    >
      <img :src="project.url_image" class="card-img-top" :alt="project.id" />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.content }}</p>
        <router-link 
        :to="{ name: 'projects.show', params: { slug:  project.slug } }" 
        class="btn btn-primary">View</router-link>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>