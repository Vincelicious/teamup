<template>
  <div class="app flex justify-center">
    <div class="modal w-11/12" v-show="value">
      <div class="container flex flex-col ">
        <button @click.prevent="close" class="text-white ">
          X
        </button>
        <p class="text-center text-2xl py-2">Total Kilometers</p>
        <!-- <div id="total-kilometers-badge"></div> -->
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
    },
    animation() {}
  }
  // mounted() {
  //   let externalScript = document.createElement("script");
  //   externalScript.setAttribute(
  //     "src",
  //     "C:/xampp/htdocs/ict/semester4/teamup/src/assets/badges/lottie.js"
  //   );
  //   document.head.appendChild(externalScript);
  // }
};

// var totalKilometersBadge = bodymovin.loadAnimation({
//   container: document.getElementById("total-kilometers-badge"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "../../assets/badges/total-kilometers-badge.json"
// });
</script>

<style lang="css">
.modal {
  background-color: theme("colors.darkened-color");
  position: absolute;
}
</style>
