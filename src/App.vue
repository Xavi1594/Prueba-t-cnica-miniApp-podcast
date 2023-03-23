<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header  >
   
        <RouterLink to="/">Home</RouterLink> <br>
        <RouterLink to="/details">details</RouterLink>
      
  
   
  </header>

  <RouterView />
</template>

<style scoped>

</style>
