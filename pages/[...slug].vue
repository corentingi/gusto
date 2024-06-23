<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-center article-title mb-6">{{ doc.title }}</h1>

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
