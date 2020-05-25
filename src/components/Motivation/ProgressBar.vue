<template>
  <div class="app">
    <div class="container px-4 py-2">
      <k-progress
        class="flex justify-center"
        :percent="60"
        active
        active-color="white"
        bg-color="white"
        color="highlighted-color"
        :format="format"
      ></k-progress>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    format(percent) {
      if (percent == 20) {
        return "1/5 km";
      } else if (percent == 40) {
        return "2/5 km";
      } else if (percent == 60) {
        return "3/5 km";
      }
    }
  }
};
</script>
<style scoped></style>
