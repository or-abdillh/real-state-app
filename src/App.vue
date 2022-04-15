<template>
  <main class="app container">
    <router-view></router-view>
    <BottomBar />
  </main>
</template>

<style scoped>

.app {
  @apply pb-20 min-h-screen bg-[#FAFAFA];
}

</style>

<script setup lang="ts">

import BottomBar from '@/components/BottomBar.vue'

</script>
