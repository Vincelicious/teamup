<template>
  <div>
    <div class="bg-primary-color text-center">
      <h2 class="top-bar text-xl text-white flex justify-center items-center">
        Training
      </h2>
    </div>
    <div class="training container mx-auto px-4 py-8">
      <div class="flex justify-around mt-4">
        <div class="text-center text-white">
          <BaseIcon class="mb-2" name="zap" />
          <div class="text-xl">8 km/h</div>
        </div>
        <div class="text-center text-white">
          <BaseIcon class="mb-2" name="clock" />
          <div class="text-xl">8:15</div>
        </div>
        <div class="text-center text-white">
          <BaseIcon class="mb-2" name="droplet" />
          <div class="text-xl">47cal</div>
        </div>
      </div>

      <div class="flex flex-col items-center text-white mt-24">
        <div class="text-6xl font-bold">2.43</div>
        <div class="text-3xl -mt-6">Kilometers</div>
      </div>

      <div class="flex justify-around items-end mt-24">
        <div
          class="bg-blue-400 inline-block rounded-full text-white w-12 h-12 flex justify-center items-center"
        >
          <BaseIcon name="square" />
        </div>

        <div
          class="bg-white inline-block rounded-full text-black w-20 h-20 flex justify-center items-center"
        >
          <BaseIcon name="zap" width="36" height="36" />
        </div>

        <div
          class="bg-blue-400 inline-block rounded-full text-white w-12 h-12 flex justify-center items-center"
        >
          <BaseIcon name="pause" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bar {
  height: 56px;
}

.training {
  background-image: url("../assets/img/training-bg.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
