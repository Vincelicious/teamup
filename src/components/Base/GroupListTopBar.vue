<template>
  <div class="flex justify-between items-center bg-primary-color h-14 fixed w-screen ">
    <SearchIcon class="icon-color ml-3" />
    <h1 class="text-white text-xl font-bold">{{ pageTitle }}</h1>
    <SlidersIcon class="icon-color mr-3" />
  </div>
</template>

<script>

import { SearchIcon, SlidersIcon } from "vue-feather-icons";
export default {
  components: { SearchIcon, SlidersIcon },
  props: {
    pageTitle: String
  }
};
</script>

<style>


.h-14{
    height: 56px;
}

.pt-14{
    padding-top: 56px;
}

</style>