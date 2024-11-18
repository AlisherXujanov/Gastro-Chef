<template>
  <LandingView />
  <CreatorsView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import LandingView from './views/LandingView.vue'
import CreatorsView from './views/CreatorsView.vue'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    LandingView,
    CreatorsView,
  },
  data() {
    return {
      // ...
    }
  },
}
</script>

<style lang="scss"></style>
