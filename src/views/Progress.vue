<template>
  <div class="app">
    <button class="btn text-white" @click="openFastestKm">
      Open ModalFastestKm
    </button>
    <ModalFastestKm
      v-model="ModalFastestKm"
      ref="loadFastestKm"
    ></ModalFastestKm>

    <button class="btn text-white" @click="openTarget">
      Open ModalTarget
    </button>
    <ModalTarget v-model="ModalTarget" ref="loadTarget"></ModalTarget>

    <button class="btn text-white" @click="openLongestRun">
      Open LongestRun
    </button>

    <ModalLongestRun
      v-model="ModalLongestRun"
      ref="loadLongestRun"
    ></ModalLongestRun>
    <h1>Test</h1>
  </div>
</template>
<script>
import ModalTarget from "@/components/Motivation/ModalTarget.vue";
import ModalFastestKm from "@/components/Motivation/ModalFastestKm.vue";
import ModalLongestRun from "@/components/Motivation/ModalLongestRun.vue";

export default {
  components: {
    ModalTarget,
    ModalFastestKm,
    ModalLongestRun
  },
  data() {
    return {
      ModalFastestKm: false,
      ModalTarget: false,
      ModalLongestRun: false
    };
  },
  methods: {
    openFastestKm() {
      this.ModalFastestKm = !this.ModalFastestKm;
      this.$refs.loadFastestKm.play();
    },
    openTarget() {
      this.ModalTarget = !this.ModalTarget;
      this.$refs.loadTarget.play();
    },
    openLongestRun() {
      this.ModalLongestRun = !this.ModalLongestRun;
      this.$refs.loadLongestRun.play();
    }
  }
};
</script>
<style scoped></style>
