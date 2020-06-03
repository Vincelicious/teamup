<template>
  <div class="app flex justify-center">
    <div class="modal w-11/12" v-show="value">
      <div class="container flex flex-col ">
        <button @click.prevent="close" class="text-white ">
          X
        </button>
        <p class="text-center text-2xl py-2">Total Kilometers</p>
        <lottie
          :options="defaultOptions"
          :height="200"
          :width="200"
          v-on:animCreated="handleAnimation"
        />
        <p class="text-center text-lg py-2">3/5 Kilometers</p>
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
import Lottie from "vue-lottie";
import animationData from "@/assets/badges/total-kilometers-badge.json";

export default {
  components: {
    ProgressBar,
    lottie: Lottie
  },
  name: "app",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    play: function() {
      this.anim.play();
    }
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
        loop: false,
        autoplay: false
      },
      animationSpeed: 1
    };
  }
};
</script>

<style lang="css">
.modal {
  background-color: theme("colors.primary-color");
  position: absolute;
}
</style>
