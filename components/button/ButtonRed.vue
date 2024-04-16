<template>
  <ButtonBase :primaryClass="primaryClass" :secondaryClass="secondaryClass" :size="size"><slot /></ButtonBase>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {type: String, default: 'md'},
})
const primaryClass = 'bg-red-600 hover:bg-red-500 text-white'
const secondaryClass = 'bg-red-800'
</script>
