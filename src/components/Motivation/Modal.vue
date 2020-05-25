<template>
  <div class="modal" v-show="value">
    <div class="container">
      <p>This is a model</p>
      <ProgressBar></ProgressBar>
      <button @click.prevent="close" class="text-white">
        Close
      </button>
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
}
</style>
