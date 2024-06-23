<template>
  <h3 :id="id" class="content-title-3 mt-5 first:mt-0 mb-2 last:mb-0">
    <a
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>
