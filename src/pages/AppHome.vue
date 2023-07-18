<script>
    import axios from 'axios';

export default {

    data() {
        return {
            arrProj:[],
        }
    },

    created() {
        axios
            .get('http://localhost:8000/api/projects/random')
            .then(response =>{ this.arrProj = response.data;
            });
    },
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-3 g-0">
            <div class="col" v-for="project in arrProj">
                <router-link :to="{name: 'projects.show', params: { slug: project.slug }}">
                    <img :src="project.url_image" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>