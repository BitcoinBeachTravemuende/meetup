<script setup lang="ts">

import TextContentComponent from './TextContent.vue'

export type TextContent = {
  title: string
  text: string
}

const _ = defineProps<{
  contents: TextContent[]
  class?: string
}>()

</script>


<template>
  <div
    v-for="content in contents"
    :key="content.title"
    class="item" 
    :class="class"
  >
    <TextContentComponent
      :title="content.title"
      :text="content.text"
    />
  </div>
</template>
