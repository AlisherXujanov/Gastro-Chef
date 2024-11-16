<template>
  <h1>{{ msg }}</h1>

  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: {
      type: String,
      required: true,
      // validator: (value) => {} // ...
    },
  }
}
</script>

<style lang="scss">
h1 {
  span {
    &.red {
      color: #FF0000;
    }

    &.green {
      color: #64D370;
    }
  }
}
</style>
