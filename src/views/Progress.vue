<template>
  <div>
    <TopBar pageTitle="Progress"></TopBar>
    <!-- Wat is de beste manier om de content naar beneden te pushen? Dit hieronder kan veranderd worden -->
    <div class="spacing py-8"></div>

    <div class="recordbadges flex justify-center mb-3">
      <RecordBadge
        v-for="badge in recordBadges"
        :key="badge.id"
        :recordBadges="badge"
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
// import BadgeService from "@/services/BadgeService.js";
import { mapState } from "vuex";

export default {
  components: {
    TopBar,
    Badge,
    RecordBadge
  },
  created() {
    this.$store.dispatch("badge/fetchBadges");
  },
  computed: {
    ...mapState("badge", ["badges"]),
    recordBadges: function() {
      return this.badges.filter(badge => {
        return badge.achievementType == "record";
      });
    }
  }
};
</script>
<style scoped></style>
