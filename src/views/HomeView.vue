<script setup>
import usePodcastService from '../services/PodcastService';
import { ref, onMounted } from 'vue';
import CardComponent from '../components/CardComponent.vue';
import { RouterLink, RouterView } from 'vue-router'


const { getPodcasts } = usePodcastService();

const podcasts = ref([]);

onMounted(async () => {
  podcasts.value = await getPodcasts();
});
</script>
<template>
  <main>
    <div v-if="podcasts.length">
      <h2>Top 100 podcasts en Tecnología</h2>
      <section>
      <div class="col-md-3 col-8" v-for="(podcast, index) in podcasts" :key="podcast['im:name'].label">
        <Router-link :to="`/podcast/${index}`">
          <CardComponent :name="podcast['im:name'].label" :artist="podcast['im:artist'].label" :img="podcast['im:image'][0]['label']" />
        </Router-link>
      </div>
    </section>
    
  </div>
  <p>Cargando podcasts...</p>
</main>
</template>

<style scoped lang="css"> 
main{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  justify-content: center;
  align-items: center;
}
</style>