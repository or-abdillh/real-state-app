<template>
  <span class="absolute top-3 right-3 text-xxs bg-gray-800 bg-opacity-75 text-gray-50 px-2 py-1 rounded-lg border border-gray-400">
    <i class="fa fa-star text-yellow-600 mr-1"></i>
    {{ value }}
  </span>
</template>

<script setup>

const props = defineProps({
  value: {
    type: Number
  }
})

</script>
