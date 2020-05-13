<template>
  <div class="flex justify-between">
    <div
      class="w-12 h-12 bg-primary-color text-white rounded-lg flex justify-center items-center capitalize"
      v-for="day in weekDays"
      :key="day"
      :class="{ 'bg-highlighted-color': trainingDays.includes(day) }"
    >
      {{ day }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trainingDays: {
      type: Array
    }
  },
  data() {
    return {
      weekDays: ["mo", "tu", "we", "th", "fr", "sa", "su"]
    };
  }
};
</script>
