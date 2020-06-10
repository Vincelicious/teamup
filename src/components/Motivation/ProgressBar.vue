<template>
  <div class="app">
    <div class="wrapper py-2 ">
      <k-progress
        class="flex justify-between"
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
  props: {
    percentage: String
  },
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
<style>
.k-progress-text {
  color: #ffffff;
  /* margin-left: 25px; */
  /* width:  */
}
.k-progress {
  /* width: 238px; */
  width: 238px;
  /* margin-right: 0; */
}
@media screen and (max-width: 400px) {
  .k-progress {
    width: 390%;
  }
}
</style>
