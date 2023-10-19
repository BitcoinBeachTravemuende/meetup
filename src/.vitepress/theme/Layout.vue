<script setup lang="ts">
import { useData } from 'vitepress'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'
import VPNavBarTranslations from 'vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue'
import VPSocialLinks from 'vitepress/dist/client/theme-default/components/VPSocialLinks.vue'
import Inspirations from './component/Inspirations.vue'
import Map from './component/Map.vue'

const { theme, frontmatter: fm } = useData()


</script>

<template>
  <div class=" py-10">
    <div class="mx-auto h-full items-stretch flex flex-col max-w-[600px] bg-black rounded-lg ">
      
      <div class="relative ">
        <img src="/beach.jpg" class="w-full rounded-t-lg" />
        <nav class="absolute right-0 top-4 h-12 bg-white dark:bg-black rounded-l-xl flex items-center px-2 bg-opacity-50 dark:bg-opacity-40">
            <VPNavBarTranslations class="!flex !items-center h-4" />
            <VPSwitchAppearance   />
        </nav>
        <a class="absolute right-0 bottom-2 py-1 px-2 bg-white"
          href="https://portal.einundzwanzig.space/de/meetup/einundzwanzig-bitcoin-beach-travemuende-meetup">
          <img src="/21logo.svg" class="h-4 " />
        </a>
      </div>

      <div class="bg-black w-full flex justify-center py-4 px-8">
        <img src="/logo_black.svg" class="" />
      </div>


      
      <div class=" bg-white dark:bg-gray-700 mx-2 rounded-md flex-grow pb-12 mb-2">

        <Content class="w-full px-8 content" />

        <Map class="mt-6" />
        
        <Inspirations 
          v-if="fm.inspirations" 
          :inspirations="fm.inspirations" 
          :title="theme.contentImpressions" 
          class="w-full px-8" />
      </div>

    </div>

    <footer class="w-full flex flex-col justify-center items-center p-2">
      <div class="bg-white dark:bg-black rounded-full m-4 px-2">
          <VPSocialLinks
          class="VPNavScreenSocialLinks"
          :links="theme.socialLinks"
      />
      </div>
      <p class="text-gray-400 text-sm bg-white dark:bg-black  px-2 py-1 rounded-full">{{ theme.footerBuiltWith }} <span class="text-orange-400">♥</span> in Travemünde.</p>
    </footer>
  </div>
</template>
