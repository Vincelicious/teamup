<template>
  <div>
    <div>
      <h2>Team Up Group</h2>
    </div>

    <div>
      <div>Group</div>
      <div>Scheme</div>
      <div>Chat</div>
    </div>

    <div class="container mx-auto px-4">
      <h3>{{ group }}</h3>
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
