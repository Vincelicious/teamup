<template>
  <div class="app flex justify-center content-center bg" v-show="value">
    <div class="modal w-11/12">
      <div class="container flex flex-col">
        <p class="text-center text-2xl pt-2 pb-6 font-bold ">Fastest Km</p>
        <lottie
          :options="defaultOptions"
          :height="200"
          :width="200"
          v-on:animCreated="handleAnimation"
        />
        <p class="text-center text-2xl py-2 font-bold">00 : 05 : 43</p>
        <p class="text-center text-lg text-white opacity-50 py-2">
          Your fastest kilometer ran.
        </p>
        <!-- <ProgressBar></ProgressBar> -->
        <button @click.prevent="close" class="text-white button">
          <p class="font-bold text-lg">Close</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import ProgressBar from "@/components/Motivation/ProgressBar.vue";
import Lottie from "vue-lottie";
import FastestKm from "@/assets/badges/fastest-kilometers-badge.json";

export default {
  components: {
    // ProgressBar,
    lottie: Lottie
  },
  name: "app",
  props: {
    title: String,
    subtitle: String,
    data: String,
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
        animationData: FastestKm,
        // animationData: Target,
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
  top: 80px;
  border-radius: 10px;
  padding: 30px;
}

.button {
  width: 200px;
  margin: 35px auto 0px auto;
  background: theme("colors.highlighted-color");
  border-radius: 10px;
  height: 50px;
}

.bg {
  position: absolute;
  top: 56px;
  background-color: rgba(207, 28, 28, 0.2);
  width: 100vw;
  height: calc(100vh - 56px);
}
</style>
