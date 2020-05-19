<template>
  <div class="app">
    <div class="container mx-auto px-4 py-8">
      <k-progress :percent="60" active active-color="yellow" bg-color = "white" color="highlighted-color" :format="format" ></k-progress>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    format(percent) {
      if (percent == 20) {
        return "1/5";
      } else if (percent == 40) {
        return "2/5";
      } else if (percent == 60) {
        return "3/5";
      }
    }
  }
};
</script>
<style scoped></style>
