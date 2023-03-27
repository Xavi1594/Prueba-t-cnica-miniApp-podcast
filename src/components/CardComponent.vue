<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  artist: String,
  img: String
})
</script>

<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="img" class="img-fluid rounded-start" :alt="`${name} - ${artist}`">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column justify-content-center">
          <h5 class="card-title text-center" style="font-family: sans-serif; text-decoration: none">{{ name }}</h5>
          <p class="card-text text-center" style="font-family: sans-serif; text-decoration: none">{{ artist }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border: 1px solid lightgray;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

.card-body {
  height: 100%;
}
</style>
