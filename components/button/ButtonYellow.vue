<template>
  <ButtonBase :primaryClass="primaryClass" :secondaryClass="secondaryClass" :size="size"><slot /></ButtonBase>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {type: String, default: 'md'},
})
const primaryClass = 'bg-yellow-600 hover:bg-yellow-500 text-white'
const secondaryClass = 'bg-yellow-800'
</script>
