<script setup lang="ts">
import '~/assets/css/main.css';
</script>

<template>
  <div class="flex flex-col min-h-dvh bg-stone-50">
    <PageNav />
    <PageContainer class="flex-grow">
      <slot></slot>
    </PageContainer>
    <PageFooter />
  </div>
</template>
