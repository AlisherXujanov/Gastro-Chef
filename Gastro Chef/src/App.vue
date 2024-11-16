<script setup>
import { RouterView } from 'vue-router'
import Navigation from "./components/Navigation/index.vue"
</script>

<template>
  <Navigation />

  <main id="router-view">
    <RouterView />
  </main>

  <footer></footer>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style lang="scss">

</style>
