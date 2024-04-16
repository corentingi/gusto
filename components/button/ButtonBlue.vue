<template>
  <ButtonBase :primaryClass="primaryClass" :secondaryClass="secondaryClass" :size="size"><slot /></ButtonBase>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {type: String, default: 'md'},
})
const primaryClass = 'bg-blue-600 hover:bg-blue-500 text-white'
const secondaryClass = 'bg-blue-800'
</script>
