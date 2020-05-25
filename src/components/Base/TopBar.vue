<template>
  <div class="flex justify-center items-center bg-primary-color h-14 fixed w-screen">
    <h1 class="text-white text-xl font-bold">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: String
  }
};
</script>

<style>
.h-14 {
  height: 56px;
}

.pt-14 {
  padding-top: 56px;
}
</style>
