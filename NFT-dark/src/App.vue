<template>
    <header>
        <Navigation />
    </header>
    <main>
        <RouterView />
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<script>
import { RouterView } from 'vue-router'
import Navigation from "@/components/navigation/Nav.vue"
import Footer from "@/components/navigation/Footer.vue"

export default {
    name: 'App',
    components: {
        RouterView,
        Navigation,
        Footer
    },
    data() {
        return {
            // ...
        }
    },
}
</script>

<style lang="scss"></style>
