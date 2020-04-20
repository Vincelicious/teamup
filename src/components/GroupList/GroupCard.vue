<template>
  <!-- Grouplist -->
  <div class="flex justify-center text-white">
    <!-- Group Card -->
    <div class="flex flex-col bg-gray-500 m-3 w-full h-48">
      <div class="title flex flex-col bg-gray-700 ">
        <h2>{{ group.name }}</h2>
        <p>{{ group.level }}KM</p>
      </div>
      <!-- Group Info -->
      <div class="flex bg-gray-600 ">
        <div class="info">
          <h2>{{ group.location }}</h2>
          <p>{{ group.members }} / {{ group.groupmax }}KM</p>
          <h2>{{ group.goal }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: Object
  }
};
</script>

<style scoped></style>
