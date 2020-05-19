<template>
  <div>
    <div class="w-16 h-16 rounded-lg bg-highlighted-color flex justify-center items-center">
      <span class="text-white">{{ user.firstName.charAt(0) }}</span>
    </div>
    <p class="text-white ml-1 mt-1">{{ user.firstName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    member: {
      type: String || Number,
      required: true,
    },
  },
  computed: {
    user() {
      return this.getUserById(this.member);
    },
    ...mapGetters("user", ["getUserById"]),
  },
};
</script>

<style lang="scss" scoped></style>
