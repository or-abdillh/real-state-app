<style scoped>

.no-scrollbar::-webkit-scrollbar {
  width: 0; 
  display: none;
}  
  
</style>   
    
<template>    
  <main class="no-scrollbar w-full pt-2 pb-8 mt-6 flex gap-5 overflow-scroll">
    <template v-for="item in props.source" :key="item.id">
      <Card :source="item" />
    </template>
  </main>      
</template>  
  
<script setup lang="ts"> 
  
import Card from '@/components/Card.vue'

interface Props {
  source: object[]
}

const props = defineProps<Props>()   
  
</script>   
