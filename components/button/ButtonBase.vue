<template>
  <button class="group">
    <div :class="[secondaryClass, secondaryShapeClasses[size]]">
      <div :class="[primaryClass, primaryShapeClasses[size]]">
        <slot />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  primaryClass: {type: String, default: 'bg-blue-600 group-hover:bg-blue-500 text-white'},
  secondaryClass: {type: String, default: 'bg-blue-800'},
  size: {type: String, default: 'md'},
})

const primaryShapeClasses = {
  lg: 'text-xl rounded-lg px-3 py-1',
  md: 'text-base rounded-lg px-3 py-1',
  sm: 'text-sm rounded-md px-2 py-0',
}
const secondaryShapeClasses = {
  lg: 'rounded-lg pb-1 group-active:pb-0 mt-0 group-active:mt-1',
  md: 'rounded-lg pb-1 group-active:pb-0 mt-0 group-active:mt-1',
  sm: 'rounded-md pb-1 group-active:pb-0 mt-0 group-active:mt-1',
}
</script>
