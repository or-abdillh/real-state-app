<template>
  <section class="p-2 min-w-[65%] rounded-xl bg-white">
    <div class="relative">
      <Rating :value="source.rate" />
      <img :src="source.thumbnail" class="z-10 w-full rounded-xl shadow-lg" alt="image">
    </div>
    <div class="mt-3 p-1">
      <h1 class="font-medium text-base text-gray-700">{{ source.name }}</h1>
      <p class="mb-2 text-sm text-gray-400">{{ source.place }}</p>
      <span class="text-base font-medium text-blue-500">
        <i class="fa fa-dollar-sign text-xs"></i>
        {{ source.price }}
        <small class="text-sm text-gray-300">/per month</small>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">

import Rating from '@/components/Rating.vue'

const props = defineProps({
  source: {
    type: Object,
    default: {}
  }
})

</script>
