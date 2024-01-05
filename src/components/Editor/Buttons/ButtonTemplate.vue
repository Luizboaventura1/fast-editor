<template>
  <button
    :style="`width: ${props.size ? props.size : 0}px;height: ${props.size ? props.size : 0}px;`"
    class="hover:bg-bgSecondary rounded flex justify-center items-center"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: String
})
</script>