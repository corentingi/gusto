<script setup lang="ts">
const website_name = 'Gusto - Recettes collaboratives'
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | ${website_name}` : '${website_name}'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
