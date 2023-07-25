<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'main',
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'right',
  },
  size: {
    type: String,
    default: 'large',
  },
  disabled: Boolean,
})
defineEmits(['click'])
const classes = computed(() => {
  let result = `button-component flex items-center justify-center type-${props.type} size-${props.size}`
  if (props.disabled) result += ' disabled'
  if (props.icon) result += ` icon-position-${props.iconPosition} gap-8px`
  return result
})
</script>

<template>
  <button :class="classes" @click="$emit('click')">
    <div v-if="icon" :class="icon" />
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.button-component {
  @apply w-max h-auto rounded-8px;
  &.type {
    &-main {
      @apply bg-accent-dark text-white border border-transparent transition ease-in hover:bg-white hover:color-accent-dark hover:border-accent-dark;
    }

    &-secondary {
      @apply bg-accent-purple text-white border border-transparent transition ease-in hover:bg-white hover:text-accent-purple hover:border-accent-purple;
    }
  }

  &.size {
    &-large {
      @apply py-12px px-16px text-lg;
    }

    &-medium {
      @apply py-8px px-12px text-base;
    }

    &-small {
      @apply py-4px px-8px text-sm;
    }
  }

  &.icon-position {
    &-left {
      @apply flex-row;
    }

    &-right {
      @apply flex-row-reverse;
    }
  }
  &.disabled {
    @apply pointer-events-none bg-white border-white color-accent-dark;
  }
}
</style>
