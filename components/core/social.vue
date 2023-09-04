<script setup>
const social = [
  ['i-custom:social-behance', 'https://www.behance.net/meri2008f10a', 'Behance'],
  ['i-custom:social-dprofile -mr-3px', 'https://dprofile.ru/mariaanikina', 'Dprofile'],
  [
    'i-custom:social-inst',
    'https://instagram.com/anikinamotion?igshid=MzRlODBiNWFlZA==',
    'Instagram',
  ],
  ['i-custom:social-tg -ml-2px', 'https://t.me/anikinaam', 'Telegram'],
]
</script>

<template>
  <div class="social flex gap-10px w-full">
    <a
      v-for="([icon, link, title], index) in social"
      :key="index"
      :href="link"
      :title="title"
      target="_blank"
      class="wrapper bg-accent-purple text-accent-light w-40px h-40px rounded-10px flex items-center transition-all duration-500 justify-center border-2 border-transparent hover:bg-accent-light hover:border-accent-purple hover:text-accent-purple dark:bg-accent-purple dark:text-accent-light dark:hover:bg-accent-dark dark:hover:text-accent-light dark:hover:border-accent-light lt-xs:w-32px lt-xs:h-32px"
    >
      <div :class="`icon ${icon} text-20px lt-xs:text-16px`" />
    </a>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  &:hover {
    .icon {
      @apply animate-tada;
    }
  }
}
</style>
