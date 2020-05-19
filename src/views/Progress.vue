<template>
  <div>
    <TopBar pageTitle="Progress"></TopBar>
    <!-- Badge Item -->
    <div class="container mx-auto px-4">
      <div class="text-white flex pt-16">
        <!-- Left Icon -->
        <div class="badge-icon">
          <img src="https://via.placeholder.com/71x85.png" />
        </div>
        <!-- Badge information (right part) -->
        <div class="badge-info flex flex-col justify-between mb-3 ml-3">
          <div>
            <h1 class="font-bold">Time in training</h1>
            <p class="underline-text">How much time in hours</p>
          </div>
          <!-- Progress Bar -->
          <div class="flex items-center">
            <div class="progressbar mr-3"></div>
            <div class="statistics underline-text text-sm">10/200</div>
          </div>
        </div>
      </div>
      <div class="line-divider mt-4"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/Base/TopBar.vue";
export default {
  components: {
    TopBar
  }
};
</script>

<style scoped>
.progressbar {
  width: 195px;
  height: 8px;
  background-color: #1cb3fd;
  border-radius: 10px;
}
.underline-text {
  color: #9d9d9d;
}
.line-divider {
  width: 100%;
  height: 2px;
  background-color: theme("colors.highlighted-color");
  opacity: 40%;
}
</style>
