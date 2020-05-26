<template>
  <div class="app">
    <button class="btn text-white" @click="openModal">Open modal</button>
    <Modal v-model="modalOpen"></Modal>
    <LottiePoc></LottiePoc>
    <h1>Test</h1>
  </div>
</template>
<script>
import Modal from "@/components/Motivation/Modal.vue";
import LottiePoc from "@/components/Motivation/LottiePoc.vue";

export default {
  components: {
    Modal,
    LottiePoc
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
