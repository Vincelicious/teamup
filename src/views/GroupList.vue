<template>
  <div>
    <h1>Group List</h1>
    <GroupCard v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<script>
import GroupCard from "@/components/GroupList/GroupCard.vue";

export default {
  components: {
    GroupCard
  },
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "Speedrunners",
          level: "Advanced",
          location: 3,
          members: 3,
          groupmax: 4,
          goal: "Full Marathon"
        },
        {
          id: 2,
          name: "Slowrunners",
          level: "Beginner",
          location: 1,
          members: 5,
          groupmax: 6,
          goal: "Quarter Marathon"
        },
        {
          id: 3,
          name: "Hardrunners",
          level: "Intermediate",
          location: 1,
          members: 4,
          groupmax: 5,
          goal: "Half Marathon"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
