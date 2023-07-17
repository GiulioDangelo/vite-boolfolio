<script>
import axios from "axios"

export default {
    data(){
        arrProj: [];
    },

    created() {
        // richiesta axios per i dati del post
        // esempio: http://localhost:8000/api/projects/iusto-hic-libero-culpa-sit-similique
        axios
            .get('http://localhost:8000/api/projects/' + this.$route.params.slug)
            .then(response =>console.log(response));

    },

}
</script>

<template>
    show
</template>

<style lang="scss">
    
</style>