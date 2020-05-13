<template>
  <!-- Grouplist -->
  <div class="flex justify-center text-white">
    <!-- Group Card -->
    <div class="flex flex-col bg-gray-500 m-3 w-full h-40 p-5 rounded-lg bg-darkened-color">
      <!-- Title -->
      <div class="flex justify-between">
        <h2 class="text-xl font-bold mb-2">{{ group.name }}</h2>
        <ChevronRightIcon class="icon-color"/>
      </div>
      <div class="flex">
        <div class="card-training-days mr-2 " v-for="(available, day) in group.trainingdays" :key="day" :group="group" v-show="available">
          {{ day }}
        </div>
      </div>
 



      <!-- Group Info -->
      <div class="group-info flex h-full items-end">
       
        <div class="flex mr-5">
          <UsersIcon class="card-icon icon-color"></UsersIcon><p class="min-w-8">{{ group.members }} / {{ group.groupmax }}</p>
        </div>
         <div class="flex mr-5">
          <MapPinIcon class="card-icon icon-color"></MapPinIcon><p>10 km</p>
        </div>
        <div class="flex">
          <TargetIcon class="card-icon icon-color"></TargetIcon><p>{{ group.goal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapPinIcon, TargetIcon, UsersIcon, ChevronRightIcon  } from "vue-feather-icons";

export default {
  components: { MapPinIcon, TargetIcon, UsersIcon, ChevronRightIcon },
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
.card-training-days {
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid theme('colors.highlighted-color');
  border-radius: 6px;
  font-size: 10px;

  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  }

</style>
