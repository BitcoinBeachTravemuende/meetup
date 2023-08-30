<script setup lang="ts">

import Headline from './Headline.vue'
import { ref } from 'vue'


export type Inspiriation = {
  source: string
  alt?: string
}

const props = defineProps<{
  title: string
  inspirations: Inspiriation[]
}>()

const fullscreen = ref('')


</script>


<template>
  <div class="relative">
    <Headline :title="title" />
    <div 
    class="grid grid-cols-2 sm:grid-cols-3 gap-4"
    >
    
      <div
      class="aspect-square border-8 
      border-gray-200 
      dark:border-white 
      hover:border-orange-400 dark:hover:border-orange-400 hover:scale-105
      ease group cursor-pointer"
      v-for="inspiration in inspirations"
      :key="inspiration.source"
      @click="fullscreen = inspiration.source"
      >
      <img 
      class="object-cover w-full h-full grayscale group-hover:grayscale-0 ease"
      :src="inspiration.source" :alt="inspiration.alt" 
       />
  </div>
  </div>
  </div>
    <button v-if="fullscreen"  class="fixed inset-0 w-full h-full dark:bg-black bg-white flex items-center justify-center " @click="fullscreen = ''">

        <img :src="fullscreen" class="peer object-scale-down w-full h-full"/>

        <div class="absolute right-6 top-6 p-2 ease dark:bg-white dark:text-black bg-gray-400 text-white
        peer-hover:opacity-100 peer-hover:bg-orange-400 
        hover:bg-orange-400 hover:opacity-100 
        shadow-xl rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
    </button>
</template>
