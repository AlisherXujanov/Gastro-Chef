<template>
  <header>
    <nav class="main-top-nav">
      <RouterLink to="/">
        <GastroChefLogo />
      </RouterLink>
      <RouterLink to="/">Программа питания</RouterLink>
      <RouterLink to="/#">Бизнес-ланчи</RouterLink>
      <RouterLink to="/#">Gastro Shop</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/#">Блог</RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import GastroChefLogo from './GastroChefLogo.vue'

export default {
  name: 'Navigation',
  components: {
    RouterLink,
    GastroChefLogo
  },
  data() {
    return {
      // ...
    }
  }
}
</script>

<style scoped lang="scss">
header {
  nav.main-top-nav {
    width: 100%;
    max-width: 1235px;
    margin: 0 auto;
    position: relative;
    // top: -47px;
  }
}
</style>
