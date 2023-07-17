<script>
import ProjectList from './components/ProjectList.vue';
import Nav from './components/Nav.vue';
import Foot from './components/Foot.vue';

export default {
  components: {
    ProjectList,
    Nav,
    Foot,
  },
};
</script>

<template>
<Nav/>
<router-view></router-view>
<Foot/>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

</style>
