<script setup lang="ts">
import 'leaflet/dist/leaflet.css'

import { ref, onMounted, defineProps } from 'vue'

const _ = defineProps<{
  class?: string
}>()

const mapRef = ref()

onMounted(async () => {
  const L = (await import('leaflet')).default
  const map = L.map(mapRef.value).setView([53.9625, 10.8788], 14)

  const host = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png'

  const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'

  L.tileLayer(host, {
    attribution,
    id: 'mapbox/light-v9'
  }).addTo(map)

  map.attributionControl.setPrefix(false)

  // Custom icon
  // https://leafletjs.com/examples/custom-icons/
  var icon = L.icon({
    iconUrl: '/btc.svg',
    iconSize: [48, 48],
    iconAnchor: [24, 24]
  })

  // 53.961729 10.883855
  // https://github.com/Einundzwanzig-Podcast/einundzwanzig.space/pull/172#issuecomment-1608985117
  L.marker([53.9615, 10.8831], { icon }).addTo(map).openPopup()
})
</script>

<template>
  <div ref="mapRef" class="leaflet-map w-full h-[250px] grayscale hover:filter-none ease" :class="class" />
</template>
