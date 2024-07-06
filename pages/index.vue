<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';
const query: QueryBuilderParams = { path: '/recipes', sort: [{ date: -1 }] }
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="article-title mb-6">Recettes</h1>

    <ContentList :query="query" v-slot="{ list }">
      <template v-for="article in list" :key="article._path">
        <NuxtLink class="block px-3 py-2 bg-stone-50 hover:bg-amber-50 rounded-md border border-stone-200 shadow-sm" :to="article._path">
          <div class="flex max-sm:flex-col justify-between">
            <h2 class="content-title-4">{{ article.title }}</h2>
            <span v-if="article.date" class="italic text-sm text-stone-400">
              Publié le {{ article.date }}
            </span>
          </div>

          <p class="line-clamp-2" v-if="article.description">{{ article.description }}</p>
        </NuxtLink>
      </template>
    </ContentList>
  </div>
</template>
