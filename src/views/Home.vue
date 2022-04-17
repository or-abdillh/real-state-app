<template>
  <main class="pt-20">
    <HeaderHome />
    <Category />
    <Carousell :source="highlights" />
    <section class="mt-5 text-gray-700 mb-5">
      <div class="flex justify-between">
        <h1 class="font-semibold text-xl">Nearby To You</h1>
        <i class="fa fa-ellipsis-h"></i>
      </div>
      <div>
        <template v-for="item in highlights" :key="item.id">
          <List :source="item" />
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

import HeaderHome from '@/components/HeaderHome.vue'
import Category from '@/components/Category.vue' 
import Carousell from '@/components/Carousell.vue'
import List from '@/components/List.vue'
import highlights from '@/contents/highlights.ts'

</script>
