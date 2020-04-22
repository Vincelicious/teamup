<template>
  <div>
    <TopBar pageTitle="Group List"></TopBar>
    <div class="pt-14">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>
  </div>
</template>

<script>
import GroupCard from "@/components/GroupList/GroupCard.vue";
import TopBar from "@/components/Base/TopBar.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    GroupCard,
    TopBar
  },
  data() {
    return {
      groups: []
    };
  },
  created() {
     EventService.getGroups()
      .then(response => {
        this.groups = response.data; // <--- set the events data
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped>
</style>
