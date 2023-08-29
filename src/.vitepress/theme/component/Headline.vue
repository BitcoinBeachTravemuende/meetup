<script setup lang="ts">

withDefaults(defineProps<{
  title: string
  class?: string
}>(), {class: ''})
</script>

<template>
  <h1 class="text-2xl bold text-orange-400 pt-8 pb-2" :class="class">{{ title }}</h1>
</template>
