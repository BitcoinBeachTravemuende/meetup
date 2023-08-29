<script setup lang="ts">

import Headline from './Headline.vue'

defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <Headline :title="title" />
  <p>{{ text }}</p>
</template>
