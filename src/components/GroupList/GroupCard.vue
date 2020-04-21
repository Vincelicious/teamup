<template>
  <!-- Grouplist -->
  <div class="flex justify-center text-white">
    <!-- Group Card -->
    <div class="flex flex-col bg-gray-500 m-3 w-full h-40 p-5">
      <!-- Title -->
      <div class="flex justify-between">
        <h2 class="text-xl font-bold mb-2">{{ group.name }}</h2>
        <ArrowRightIcon />
      </div>
      <p>{{ group.level }}</p>



      <!-- Group Info -->
      <div class="group-info flex h-full items-end">
        <div class="flex mr-5">
          <MapPinIcon class="card-icon"></MapPinIcon><p>{{ group.location }} km</p>
        </div>
        <div class="flex mr-5">
          <UsersIcon class="card-icon"></UsersIcon><p>{{ group.members }} / {{ group.groupmax }}</p>
        </div>
        <div class="flex">
          <TargetIcon class="card-icon"></TargetIcon><p>{{ group.goal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapPinIcon, TargetIcon, UsersIcon, ArrowRightIcon } from "vue-feather-icons";

export default {
  components: { MapPinIcon, TargetIcon, UsersIcon, ArrowRightIcon },
  props: {
    group: Object
  }
};
</script>

<style scoped>

/* Bottom Icons Styling */

.card-icon{
  margin-right: 0.5em;
  height: 1.2em;
  width: 1.2em;
}
</style>
