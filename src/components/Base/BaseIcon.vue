<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use v-bind="{ 'xlink:href': 'img/feather-sprite.svg#' + name }" />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
};
</script>

<style scoped>
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: inline-block;
}
</style>
