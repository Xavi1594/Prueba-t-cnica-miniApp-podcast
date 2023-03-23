<script setup>
import usePodcastService from '../services/PodcastService';
import { ref, onMounted } from 'vue';
import CardComponent from '../components/CardComponent.vue';

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
        {{ index + 1 }} {{ podcast['im:name'].label }}
        {{ index + 1 }} {{ podcast['im:artist'].label }}
    <img :src="podcast['im:image'][0]['label']" alt="Podcast Image">
  
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Cargando podcasts...</p>
  </div>
  <CardComponent>
    :name=" {{ index + 1 }} {{ podcast['im:name'].label }}",
    :author=" {{ index + 1 }} {{ podcast['im:artist'].label }}",
    :image="podcast['im:image'][0]['label']" alt="Podcast Image">
  </CardComponent>
</template>
<style scoped lang="scss"> 

</style>