<template>
  <button :class="outlined ? size + ' outlined' : size">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'sm',
    },
  }
}
</script>

<style lang="scss" scoped>
button {
  border: 1px solid $yellow;
  color: $white;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;
  transition: 0.2s;
  background-color: transparent;

  &.sm {
    font-size: 1em;
  }

  &.lg {
    font-size: 1.2em;
    padding: 20px 40px;
  }

  &:hover {
    background-color: $yellow;
    color: $black;
  }

  &.outlined {
    background-color: $yellow;
    color: $black;

    &:hover {
      background-color: $black;
      color: $yellow;
    }
  }
}
</style>

<!--
  <Button text="..." outlined="true" size="lg" />
    - text  =  string
    - outlined  =  bool
    - size  =  string
-->
