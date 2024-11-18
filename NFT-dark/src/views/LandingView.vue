<template>
  <h1>Explore, But and Sell the <span>Best NFTs</span></h1>
  <hr />

  <ButtonVue text="Explore" outlined="true" />
  <ButtonVue text="Create" size="lg" />

</template>

<script>
import ButtonVue from '@/components/common/Button.vue'

export default {
  name: 'LandingView',
  components: {
    ButtonVue,
  },
  data() {
    return {
      // ...
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;

  span {
    color: $yellow;
  }
}
</style>
