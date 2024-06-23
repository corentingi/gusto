<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <div class="mb-6 space-y-2">
        <h1 class="text-center article-title">{{ doc.title }}</h1>

        <div v-if="doc.date" class="italic text-center text-sm text-stone-400">
          Publié le {{ doc.date }}
        </div>
      </div>

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
