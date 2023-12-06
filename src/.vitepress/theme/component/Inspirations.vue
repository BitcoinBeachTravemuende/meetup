<script setup lang="ts">
import Headline from './Headline.vue'
import { ref, defineProps, computed } from 'vue'

type Inspiration = {
  source: string
  alt?: string
}

type InspirationWithId = Inspiration & {
  id: number
}

const { inspirations: inspirationRaw } = defineProps<{
  title: string
  inspirations: Inspiration[]
  class?: string
}>()

const inspirations = computed(() =>
  inspirationRaw.map<InspirationWithId>((inspiration, index) => ({
    ...inspiration,
    id: index
  }))
)

const selectedSrc = computed(() => (selectedId.value >= 0 ? inspirations.value[selectedId.value].source : ''))

const selectedId = ref(-1)

const onClick = (inspiration: InspirationWithId) => {
  selectedId.value = inspiration.id
}

const next = (event: MouseEvent) => {
  event.stopPropagation()
  selectedId.value = (selectedId.value + 1) % inspirations.value.length
}

const prev = (event: MouseEvent) => {
  event.stopPropagation()
  selectedId.value = (selectedId.value - 1 + inspirations.value.length) % inspirations.value.length
}
</script>

<template>
  <div class="relative" :class="class">
    <Headline :title="title" />
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div
        class="aspect-square border-8 border-gray-200 dark:border-white hover:border-orange-400 dark:hover:border-orange-400 hover:scale-105 ease group cursor-pointer"
        v-for="inspiration in inspirations"
        :key="inspiration.id"
        @click="onClick(inspiration)"
      >
        <img
          class="object-cover w-full h-full grayscale group-hover:grayscale-0 ease"
          :src="inspiration.source"
          :alt="inspiration.alt"
        />
      </div>
    </div>
  </div>
  <button
    v-if="selectedId >= 0"
    class="fixed inset-0 w-full h-full dark:bg-black bg-white flex items-center justify-center"
    @click="selectedId = -1"
  >
    <img :src="selectedSrc" class="peer object-scale-down w-full h-full" />

    <div class="group absolute right-0 inset-y-0 px-4 sm:px-6 flex items-center justify-center ease" @click="next">
      <div
        class="text-gray-400 dark:text-black p-2 sm:p-5 bg-white bg-opacity-100 sm:bg-opacity-0 shadow-xl group-hover:text-white group-hover:dark:text-black group-hover:bg-opacity-100 group-hover:bg-orange-400 translate-x-0 sm:translate-x-24 group-hover:translate-x-0 ease"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 sm:w-10 sm:h-10"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531l7.71-7.71Z"
          />
        </svg>
      </div>
    </div>
    <div class="group absolute left-0 inset-y-0 px-4 sm:px-6 flex items-center justify-center ease" @click="prev">
      <div
        class="text-gray-400 dark:text-black p-2 sm:p-5 bg-white bg-opacity-100 sm:bg-opacity-0 shadow-xl group-hover:text-white group-hover:dark:text-black group-hover:bg-opacity-100 group-hover:bg-orange-400 translate-x-0 sm:-translate-x-24 group-hover:translate-x-0 ease"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 sm:w-10 sm:h-10 rotate-180"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.187 12L7.47 4.285q-.221-.222-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .531.221l7.637 7.642q.242.243.354.54q.111.299.111.597t-.111.596q-.112.298-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532q0-.31.22-.531l7.71-7.71Z"
          />
        </svg>
      </div>
    </div>

    <div
      class="absolute right-4 top-4 sm:right-6 sm:top-6 p-2 sm:p-4 ease dark:bg-white dark:text-black bg-gray-400 text-white peer-hover:opacity-100 peer-hover:bg-orange-400 hover:bg-orange-400 dark:hover:bg-orange-400 hover:opacity-100 shadow-xl rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 sm:w-8 sm:h-8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
  </button>
</template>
