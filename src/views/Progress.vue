<template>
  <div>
    <TopBar pageTitle="Progress"></TopBar>
    <Badge></Badge>
    <Badge></Badge>
  </div>
</template>

<script>
import TopBar from "@/components/Base/TopBar.vue";
import Badge from "@/components/Base/Progress/Badge.vue";

export default {
  components: {
    TopBar,
    Badge
  }
};
</script>

<style scoped></style>
