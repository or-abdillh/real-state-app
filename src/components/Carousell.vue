<style scoped>

.no-scrollbar::-webkit-scrollbar {
  width: 0;
  display: none;
}

</style>

<template>
  <main class="no-scrollbar w-full pt-2 pb-8 mt-6 flex gap-5 overflow-scroll">
    <template v-for="item in source" :key="item.id">
      <Card :source="item" />
    </template>
  </main>
</template>

<script setup>

import Card from '@/components/Card.vue'

const props = defineProps({
  source: {
    type: Array,
    default: {}
  }
})

</script>
