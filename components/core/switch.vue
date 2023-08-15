<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue', 'change'])
const classes = computed(() => {
  let result =
    'switch-component relative w-full max-w-48px cursor-pointer text-accent-purple flex items-center justify-center gap-20px'
  if (props.disabled) result += ' disabled'
  if (props.modelValue === true) result += ' active'
  return result
})
const click = () => {
  if (props.disabled) return
  const newVal = !props.modelValue
  emit('update:modelValue', newVal)
  emit('change', newVal)
}
</script>

<template>
  <div :class="classes" @click="click">
    <slot />
    <div
      class="track box-border max-w-48px h-28px py-0 px-1px bg-accent-light border-2 border-accent-purple rounded-full flex w-full items-center shrink-0 transition-all duration-500"
    >
      <div
        class="circle w-20px h-20px ml-2px bg-accent-purple rounded-full transition-all duration-500"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.switch-component {
  &.active {
    .track {
      @apply bg-accent-purple;
    }

    .circle {
      @apply bg-accent-light;
      transform: translate3d(94%, 0, 0);
    }
  }

  &.disabled {
    @apply outline-none cursor-not-allowed pointer-events-none text-gray;
    .track {
      @apply border-2 border-gray;
    }
    .circle {
      @apply bg-gray;
    }
  }
}
</style>
