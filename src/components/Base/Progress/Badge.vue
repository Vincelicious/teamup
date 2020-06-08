<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="text-white flex">
        <!-- Left Icon -->
        <div class="badge-icon flex justify-center items-center">
          <img src="@/assets/badges/wireframebadge.svg" />
        </div>
        <!-- Badge information (right part) -->
        <div class="badge-info flex flex-col justify-center mb-3 ml-3">
          <div>
            <h1 class="font-bold mt-3">Time in training</h1>
            <p class="underline-text">How much time in hours</p>
          </div>
          <!-- Progress Bar -->
          <div class="flex items-center">
            <div class="progressbar mr-3 mt-3"></div>
            <div class="statistics text-white mt-2">10/200</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.progressbar {
  width: 100%;
  height: 6px;
  background-color: #1cb3fd;
  border-radius: 10px;
}
.underline-text {
  color: #9d9d9d;
}
/* .line-divider {
  width: 100%;
  height: 2px;
  background-color: theme("colors.highlighted-color");
  opacity: 40%;
} */
.badge-info {
  width: 100%;
}
.badge-icon {
  width: 40vw;
}
.statistics {
  font-size: 0.8rem;
}
</style>
