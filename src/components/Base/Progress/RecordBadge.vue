<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="text-white flex flex-col items-center">
        <div class="badge-icon flex justify-center items-center">
          <!-- <img :key="'@/assets/badges/' + recordBadges.image" /> -->
          <img key="@/assets/badges/wireframebadge2.svg" />
        </div>
        <div class="badge-info flex flex-col justify-center mb-3 ml-3">
          <div>
            <h1 class="font-bold mt-3">{{ recordBadges.name }}</h1>
            <p class="underline-text">{{ recordBadges.description }}</p>
          </div>
          <!-- Progress Bar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recordBadges: Object
  }
};
</script>

<style scoped>
.underline-text {
  color: #9d9d9d;
}
.badge-icon {
  width: 20vw;
}
</style>
