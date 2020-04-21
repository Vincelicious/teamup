<template>
  <!-- Grouplist -->
  <div class="flex justify-center text-white">
    <!-- Group Card -->
    <div class="flex flex-col bg-gray-500 m-3 w-full h-48">
      <div class="title flex flex-col items-start bg-gray-700">
        <h2>{{ group.name }}</h2>
        <p>{{ group.level }}</p>
      </div>
      <!-- Group Info -->
      <div class="flex bg-gray-600 h-full items-end">
        <div class="info flex">
          <div class="flex m-2">
            <MapPinIcon />
            <p>{{ group.location }} km</p>
          </div>
          <div class="flex m-2">
            <UsersIcon />
            <p>{{ group.members }} / {{ group.groupmax }} members</p>
          </div>
          <div class="flex m-2">
            <TargetIcon />
            <p>{{ group.goal }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapPinIcon, TargetIcon, UsersIcon } from "vue-feather-icons";

export default {
  components: { MapPinIcon, TargetIcon, UsersIcon },
  props: {
    group: Object
  }
};
</script>

<style scoped>


</style>
