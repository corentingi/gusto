<template>
  <h5 :id="id" class="content-title-5 mt-3 first:mt-0 mb-1 last:mb-0">
    <a
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h5>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h5)
</script>
