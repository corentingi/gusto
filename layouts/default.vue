<script setup lang="ts">
import '~/assets/css/main.css';
</script>

<template>
  <div class="flex flex-col min-h-dvh bg-stone-50">
    <PageNav />
    <PageContainer class="min-h-[80vh]">
      <slot></slot>
    </PageContainer>
    <PageFooter class="flex-grow" />
  </div>
</template>
