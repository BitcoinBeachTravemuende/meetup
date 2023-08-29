<script setup lang="ts">

import TextContentComponent from './TextContent.vue'

export type TextContent = {
  title: string
  text: string
}

const props = defineProps<{
  contents: TextContent[]
}>()

</script>


<template>
  <div
    v-for="content in contents"
    :key="content.title"
    class="item"
  >
    <TextContentComponent
      :title="content.title"
      :text="content.text"
    />
  </div>
</template>
