<script setup>
const links = [
  ['Обо мне', '#about'],
  ['Проекты', '#projects'],
  ['Контакты', '#contacts'],
]
const switchValue = ref(false)
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')

  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    switchValue.value = false
  } else {
    switchValue.value = true
  }
})
</script>

<template>
  <header
    class="section-header fixed w-full top-0 left-0 flex justify-between items-center py-5 bg-accent-light z-12 dark:bg-accent-dark"
  >
    <div class="w-container flex justify-between items-center">
      <nuxt-link to="/" class="text-accent text-14px leading-20px">Maria Anikina</nuxt-link>
      <nav
        class="w-max flex gap-40px text-14px leading-20px text-accent-dark relative overflow-hidden dark:text-accent-light"
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
      <CoreSwitch v-model="switchValue" @click="toggleTheme" />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
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
