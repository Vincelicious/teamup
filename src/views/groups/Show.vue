<template>
  <div>
    <div class="bg-primary-color text-center">
      <h2 class="text-2xl text-white py-8">Team Up Group</h2>
    </div>

    <div class="bg-darkened-color flex justify-evenly text-white">
      <div class="py-4 flex-1 text-center">Group</div>
      <div class="py-4 flex-1 text-center">Scheme</div>
      <div class="py-4 flex-1 text-center">Chat</div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <h3 class="text-white text-2xl mb-2">{{ group.name }}</h3>
      <span class="text-white flex items-center">
        <BaseIcon class="mr-2" name="target" width="16" height="16" />
        {{ group.goal }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped></style>
