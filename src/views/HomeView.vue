<script setup>
import usePodcastService from '../services/PodcastService';
import { ref, onMounted } from 'vue';

const { getPodcasts } = usePodcastService();

const podcasts = ref([]);

onMounted(async () => {
  podcasts.value = await getPodcasts();
});
</script>

<template>
  <div v-if="podcasts.length">
    <h2>Top 100 podcasts en Tecnología</h2>
    <ul>
      <li v-for="(podcast, index) in podcasts" :key="podcast['im:name'].label">
        {{ index + 1 }}. {{ podcast['im:name' ].label }}
       
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Cargando podcasts...</p>
  </div>
</template>