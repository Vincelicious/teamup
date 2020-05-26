<template>
  <div>
    <GroupListTopBar pageTitle="Group List"></GroupListTopBar>
    <div class="pt-16 mb-16">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>
    <div class="create-group-btn mr-3 mb-3 flex justify-center items-center">
      <PlusIcon class="text-white" />
    </div>
  </div>
</template>

<script>
import GroupCard from "@/components/GroupList/GroupCard.vue";
import GroupListTopBar from "@/components/Base/GroupListTopBar.vue";
import { PlusIcon } from "vue-feather-icons";
import { mapState } from "vuex";
import GroupService from "@/services/GroupService";
import UserService from "@/services/UserService";

export default {
  components: {
    GroupCard,
    GroupListTopBar,
    PlusIcon
  },
  created() {
    this.$store.dispatch("group/fetchGroups");
    GroupService.createGroups();
    UserService.createUsers();
  },
  computed: {
    ...mapState("group", ["groups"])
  }
};
</script>

<style scoped>
.create-group-btn {
  position: fixed;
  width: 52px;
  height: 52px;
  bottom: 56px;
  right: 0px;
  background-color: theme("colors.highlighted-color");
  border-radius: 100%;
}
</style>
