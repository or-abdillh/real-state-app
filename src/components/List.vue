<template>
  <section class="mt-3 w-full bg-white rounded-xl flex items-center gap-5 p-3">
    <div class="w-5/12 relative">
      <Rating :value="source.rate" />
      <img :src="source.thumbnail" class="w-full rounded-xl shadow-lg" />
    </div>
    <div>
      <h1 class="text-lg font-medium text-gray-700 mb-1">{{ source.name }}</h1>
      <p class="text-gray-400 font-medium text-sm mb-2">{{ source.place }}</p>
      <span class="text-blue-400 text-lg font-medium">
        <i class="fa fa-dollar-sign text-xs"></i>
        {{ ( source.price / 30 ).toFixed() }}
        <span class="text-gray-400 text-sm">/per day</span>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">

import Rating from '@/components/Rating.vue'

interface Props {
  source: object
}

const props: any = defineProps<Props>()

</script>
