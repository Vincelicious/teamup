<template>
  <div>
    <TopBar pageTitle="Progress"></TopBar>
    <!-- Wat is de beste manier om de content naar beneden te pushen? Dit hieronder kan veranderd worden -->
    <div class="spacing py-8"></div>

    <div class="recordbadges flex">
      <RecordBadge
        v-for="recordBadge in recordBadges"
        :key="recordBadge.id"
        :recordBadges="recordBadge"
      ></RecordBadge>
    </div>

    <Badge></Badge>
    <Badge></Badge>
    <Badge></Badge>
  </div>
</template>

<script>
import TopBar from "@/components/Base/TopBar.vue";
import Badge from "@/components/Base/Progress/Badge.vue";
import RecordBadge from "@/components/Base/Progress/RecordBadge.vue";
import BadgeService from "@/services/BadgeService.js";

export default {
  components: {
    TopBar,
    Badge,
    RecordBadge
  },
  data() {
    return {
      recordBadges: []
    };
  },
  created() {
    BadgeService.getRecordBadges()
      .then(response => {
        this.recordBadges = response.data;
        console.log(this.recordBadges);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped></style>
