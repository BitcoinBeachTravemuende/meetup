<script setup lang="ts">

import 'leaflet/dist/leaflet.css'

import { ref, onMounted } from "vue";

const _ = defineProps<{
  class?: string
}>()

const mapRef = ref()

onMounted(async () => {
    const L = (await import('leaflet')).default;
    const map = L.map(mapRef.value).setView([53.9625, 10.8788], 14)

    const host = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png';

    const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'

    L.tileLayer(
      host, {
      attribution,
      id: 'mapbox/light-v9',
    }).addTo(map)

    map.attributionControl.setPrefix(false);

    // Custom icon
    // https://leafletjs.com/examples/custom-icons/
    var icon = L.icon({
      iconUrl: '/meetup/btc.svg',
      iconSize:     [48, 48], 
      iconAnchor:   [24, 24], 
    });

    L.marker([53.9615, 10.8831], { icon }).addTo(map).openPopup()
  })

</script>

<template>
  <div ref="mapRef" 
    class="leaflet-map w-full h-[250px] grayscale hover:filter-none ease"
    :class="class"
  />
</template>
