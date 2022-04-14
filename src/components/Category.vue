<template>
  <section class="mt-6 w-full flex justify-between rounded-xl overflow-hidden bg-[#FFFFFF]">
    <template v-for="(item, x) in category" :key="x">
      <div
        @click="current = item"
        :class="current === item ? 'bg-blue-500 rounded-xl text-gray-50' : ''"
        class="w-4/12 duration-300 grid place-items-center text-xl py-5 font-medium text-gray-500">
        {{ item }}
     </div>
    </template>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const category: string[] = [
  'Buy', 'Rent', 'Sell'
]

const current: object = ref(category[0])

</script>
