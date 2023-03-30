<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  artist: String,
  img: String
})
</script>
<template>
  <div class="card">
    <div class="card-image">
      <img :src="podcast['im:image'][2].label" alt="Podcast image" />
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ podcast["im:name"].label }}</h2>
      <p class="card-author">{{ podcast["im:artist"].label }}</p>
    </div>
  </div>
</template>

<style lang="css">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 14em;
  margin-bottom: 4em;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 8em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  height: 7.5em;
}

.card-title {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.5em;
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-author {
  font-size: 0.8em;
  color: grey;
  max-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
