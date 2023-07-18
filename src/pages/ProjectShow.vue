<script>
import axios from "axios"
import { DateTime } from "luxon";

export default {
    data(){
        return{
            proj: null,
            luxon: DateTime,
        };
    },

    created() {
        // richiesta axios per i dati del post
        // esempio: http://localhost:8000/api/projects/iusto-hic-libero-culpa-sit-similique
        axios
            .get('http://localhost:8000/api/projects/' + this.$route.params.slug)
            .then(response =>{ this.proj = response.data;
            });
    },

}
</script>

<template>
    <template v-if="proj">    
        <h1>{{ proj.title }}</h1>
        <img :src="proj.url_image" alt="">
        <p>{{ proj.content }}</p>
    </template>
</template>

<style lang="scss">
    
</style>