<template>
  <div class="about-page-wrapper">
    <Heading>
      Здравствуйте! Меня зовут <span class="green">Кобылинский Кирилл</span>,
      и я являюсь <span class="green">основателем GastroChef.</span>
    </Heading>
    <p>This is the about page</p>
  </div>
</template>

<script>
import Heading from '@/components/common/Heading.vue';
export default {
  name: 'AboutView',
  components: {
    Heading,
  },
}
</script>

<style lang="scss" scoped></style>
