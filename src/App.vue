<template>
  <main class="app">
    <router-view></router-view>
    <BottomBar />
  </main>
</template>

<style scoped>

.app {
  @apply w-full min-h-screen lg:w-5/12 xl:w-4/12 lg:mx-auto md:px-12 p-5 bg-[#FAFAFA];
}

</style>

<script setup lang="ts">

import BottomBar from '@/components/BottomBar.vue'

</script>
