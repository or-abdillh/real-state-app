<template>
  <Header>
    <template v-slot:start>
      <section>
        <span class="flex items-center gap-2 mb-2 text-gray-500">
          <small>Location</small>
          <i class="fa fa-chevron-down text-xs"></i>
        </span>
        <span class="text-2xl flex items-center gap-3">
          <i class="text-blue-500 fa fa-map-marker-alt text-lg"></i>
          <h1>
            <strong>Russia</strong>
            , Moscow
          </h1>
        </span>
      </section>
    </template>
    <template v-slot:end>
      <div>
        <span class="rounded-full border border-gray-400 block grid place-items-center" style="width: 55px; height: 55px">
          <i class="fa fa-search"></i>
        </span>
      </div>
    </template>
  </Header>
</template>

<script setup lang="ts">

import Header from '@/components/Header.vue'

</script>
