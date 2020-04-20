<template>
  <div>
    <h1>Group Overview</h1>
  </div>
</template>

<script>
export default {
  name: "GroupOverview",
  data() {
    return {
      id: Number,
      name: "",
      description: "",
      goal: "",
      level: "",
      groupmax: "",
      trainingdays: {
          mon: true,
          tue: false,
          wed: false,
          thu: false,
          fri: true,
          sat: true,
          sun: false,
      },
      location: {
          lat: 0,
          lng: 0
      }
    };
  }
};
</script>

<style scoped>
</style>