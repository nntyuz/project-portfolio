<script setup>
const props = defineProps({
  current: Number,
  max: Number,
})
const percent = computed(() => {
  const PERCENT_FOR_CIRCLE = 3.6
  return Math.floor(100 * ((props.current / props.max) * PERCENT_FOR_CIRCLE))
})

const degForCircle = computed(() => {
  return `background: conic-gradient(#6C63FF ${percent.value}deg, transparent 0deg);`
})
const percentage = computed(() => {
  return `${Math.floor(100 * (props.current / props.max))}%`
})
</script>

<template>
  <div
    class="relative w-86px h-86px border border-accent-purple conic flex items-center justify-center rounded-full after:absolute after:content-empty after:h-80px after:w-80px after:bg-accent-light after:rounded-full after:border after:border-accent-purple dark:after:bg-accent-dark"
    :style="degForCircle"
  >
    <div class="z-9">{{ percentage }}</div>
  </div>
</template>
