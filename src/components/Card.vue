<template>
  <section class="p-2 min-w-[45%] rounded-xl bg-white shadow-lg">
    <div class="relative">
      <span class="absolute top-3 right-3 text-xxs bg-gray-800 bg-opacity-75 text-gray-50 px-2 py-1 rounded-lg border border-gray-400">
        <i class="fa fa-star text-yellow-600 mr-1"></i>
        {{ source.rate }}
      </span>
      <img :src="source.thumbnail" class="z-10 w-full rounded-xl" alt="image">
    </div>
    <div class="mt-3 p-1">
      <h1 class="font-medium text-sm text-gray-700">{{ source.name }}</h1>
      <p class="mb-2 text-xs text-gray-400">{{ source.place }}</p>
      <span class="text-lg font-medium text-blue-500">
        <i class="fa fa-dollar-sign"></i>
        {{ source.price }}
        <small class="text-xs">/per month</small>
      </span>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  source: {
    type: Object,
    default: {}
  }
})

</script>
