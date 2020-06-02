<template>
  <div id="app">
    <lottie
      :options="defaultOptions"
      :height="200"
      :width="200"
      v-on:animCreated="handleAnimation"
    />
    <button v-on:click="play">play</button>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import animationData from "@/assets/badges/total-kilometers-badge.json";

export default {
  name: "app",
  components: {
    lottie: Lottie
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
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    }
  }
};
</script>
