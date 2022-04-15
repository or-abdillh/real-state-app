<template>
  <main class="pt-20">
    <HeaderHome />
    <Category />
    <Carousell :source="highlights" />
  </main>
</template>

<script setup lang="ts">

import HeaderHome from '@/components/HeaderHome.vue'
import Category from '@/components/Category.vue' 
import Carousell from '@/components/Carousell.vue'
import highlights from '@/contents/higlights.ts'

</script>
