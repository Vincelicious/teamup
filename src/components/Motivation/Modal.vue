<template>
  <div class="app flex justify-center">
    <div class="modal w-11/12" v-show="value">
      <div class="container flex flex-col ">
        <button @click.prevent="close" class="text-white ">
          X
        </button>
        <p class="text-center text-2xl py-2">Total Kilometers</p>
        <p class="text-center text-lg py-2">3 Kilometers</p>
        <p class="text-center text-sm text-opacity-50 py-2">
          Your total numbers of kilometers ran
        </p>
        <ProgressBar></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/Motivation/ProgressBar.vue";

export default {
  components: {
    ProgressBar
  },
  name: "Modal",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="css">
.modal {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
}
</style>
