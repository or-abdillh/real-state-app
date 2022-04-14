<style scoped>
.wrapper {
  @apply fixed bottom-0 right-0 left-0;
}

.bottom-bar {
  @apply bg-[#FFFFFF] flex justify-between w-full px-6 pt-4 rounded-t-lg lg:w-5/12 xl:w-4/12 lg:mx-auto;
}

.active {
  @apply duration-300 grid place-items-center text-gray-100 bg-gradient-to-r from-blond to-yellow-500 ring-4 ring-white;
  transform: translateY(-70%);
  width: 60px;
  height: 60px;
}
</style>

<template>
  <section class="wrapper">
    <section class="bottom-bar">
      <template v-for="(item, x) in menu" :key="x">
        <div
          @click="menuActive = item.name"
          :class="menuActive === item.name ? 'active' : 'text-gray-300'"
          class="pointer rounded-full">
          <i class="text-xl" :class="item.icon"></i>
        </div>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import menu from '@/contents/menu.ts'

const menuActive: any = ref(menu[0].name)
</script>
