<template>
  <header class="fixed w-full top-0 left-0 flex justify-between items-center pt-30px">
    <div class="w-container flex justify-between items-center">
      <nuxt-link to="/" class="text-accent-purple font-mak font-bold">Logotype</nuxt-link>
      <nav
        class="flex flex-col gap-8px text-14px leading-20px text-accent-dark relative overflow-hidden"
      >
        <a
          v-for="([name, link], index) in links"
          :key="index"
          :href="link"
          :data-after="name"
          class="nav-links"
        >
          <span>
            {{ name }}
          </span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const links = [
  ['Обо мне', '#about'],
  ['Проекты', '#work'],
  ['Контакты', '#contacts'],
]
</script>

<style lang="postcss">
.nav-links {
  @apply relative p-0 overflow-hidden flex after:content-[attr(data-after)] after:block after:text-accent-purple after:translate-y-full after:absolute after:left-0 after:transition-inherit;
  transition: transform 0.3s;
  span {
    @apply translate-y-0 transition-inherit;
  }
  &:hover {
    span {
      @apply -translate-y-full;
    }
    &::after {
      @apply translate-y-0;
    }
  }
}
</style>
