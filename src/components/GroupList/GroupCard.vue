<template>
  <!-- Grouplist -->
  <div class="flex justify-center text-white">
    <!-- Group Card -->
    <div class="flex flex-col bg-gray-500 m-3 w-full h-48">
      <div class="title flex flex-col items-start bg-gray-700  ">
        <h2>{{ group.name }}</h2>
        <p>{{ group.level }}</p>
      </div>
      <!-- Group Info -->
      <div class="flex bg-gray-600 h-full items-end">
        <div class="info flex">
          <h2 class="m-2 bg-red-600">{{ group.location }} KM</h2>
          <p class="m-2 bg-red-600">
            {{ group.members }} / {{ group.groupmax }} members
          </p>
          <h2 class="m-2 bg-red-600">{{ group.goal }}</h2>
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
