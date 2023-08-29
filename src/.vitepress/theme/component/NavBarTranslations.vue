
<!-- 
  Similar to VPNavBarTranslations, but without the icon (which is in chineese only)
  https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBarTranslations.vue
-->

<script lang="ts" setup>

import { useData } from 'vitepress'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'

const { theme } = useData()
const { localeLinks, currentLang } = useLangs({ correspondingLink: true })
</script>

<template>
  <VPFlyout
    v-if="localeLinks.length && currentLang.label"
    :label="theme.langMenuLabel || 'Change language'"
  >
    <div class="items">
      <p class="pr-2 pl-1 font-md">{{ currentLang.label }}</p>

      <template v-for="locale in localeLinks" :key="locale.link">
        <VPMenuLink :item="locale" />
      </template>
    </div>
  </VPFlyout>
</template>

<style scoped>


.title {
  padding: 0 24px 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
</style>
