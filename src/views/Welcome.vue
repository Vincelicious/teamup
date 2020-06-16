<template>
  <div class="container mx-auto px-4">
    <div class="w-full flex flex-col items-center">
      <div class="color mt-24 w-48 h-48 rounded-full"></div>
      <h1 class="pt-12 text-center h-40 leading-8">
        <span class="text-4xl text-white opacity-50">Welcome back, </span><br />
        <span
          class="nickname text-4xl text-white"
          :class="{ isSet: isUserSet }"
        >
          {{ user.firstName }}
        </span>
      </h1>

      <router-link
        class="opacity-50 text-white text-lg mt-16"
        :to="{ name: 'Group List' }"
      >
        Continue
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isUserSet: false
    };
  },
  created() {
    this.$store.dispatch("user/fetchUsers");
    setTimeout(() => {
      this.$store.dispatch("user/setRandomUser");
      this.isUserSet = true;
    }, 500);
  },
  computed: {
    ...mapState("user", ["user"])
  }
};
</script>

<style scoped>
.color {
  border: 8px solid #16bffd;
  box-shadow: 0px 8px 24px rgba(22, 191, 253, 0.28);
}

.nickname {
  opacity: 0;
  transition: all 0.3s ease-in;
}

.isSet {
  opacity: 1;
}
</style>
