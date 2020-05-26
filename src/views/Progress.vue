<template>
  <div class="app">
    <button class="btn text-white" @click="openModal">Open modal</button>
    <Modal v-model="modalOpen"></Modal>
    <h1>Test</h1>
  </div>
</template>
<script>
import Modal from "@/components/Motivation/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>
<style scoped></style>
