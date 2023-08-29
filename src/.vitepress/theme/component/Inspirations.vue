<script setup lang="ts">

import Headline from './Headline.vue'


export type Inspiriation = {
  source: string
  alt?: string
}

const props = defineProps<{
  title: string
  inspirations: Inspiriation[]
}>()

</script>


<template>
  <div>
    <Headline :title="title" />
    <div 
    class="grid grid-cols-2 sm:grid-cols-3 gap-4"
    >
    
      <div
      class="aspect-square border-8 
      border-gray-200 
      dark:border-white 
      hover:border-orange-400 hover:scale-105
      ease group"
      v-for="inspiration in inspirations"
      :key="inspiration.source"
      >
      <img 
      class="object-cover w-full h-full grayscale group-hover:grayscale-0 ease"
      :src="inspiration.source" :alt="inspiration.alt" 
       />
    </div>
  </div>
  </div>
</template>
