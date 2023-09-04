<script setup>
const links = [
  ['Обо мне', '#about'],
  ['Проекты', '#projects'],
  ['Контакты', '#contacts'],
]

const switchValue = ref(false)
const activeMenu = ref(false)

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')

  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}
const toggleMenu = () => {
  activeMenu.value = !activeMenu.value
  document.body.classList.toggle('overflow-hidden')
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
    class="section-header fixed w-full top-0 left-0 flex justify-between items-center py-5 bg-accent-light z-99 dark:bg-accent-dark"
  >
    <div
      class="w-container flex justify-between items-center"
      :class="{ 'active-menu': activeMenu }"
    >
      <a href="#hero" class="text-accent text-14px leading-20px lt-xs:order-2">Maria Anikina</a>
      <nav
        class="nav-wrapper w-max flex gap-40px text-14px leading-20px text-accent-dark relative overflow-hidden dark:text-accent-light lt-xs:hidden lt-xs:order-4"
      >
        <a
          v-for="([name, link], index) in links"
          :key="index"
          :href="link"
          :data-after="name"
          class="nav-links"
          @click="activeMenu = false"
        >
          <span>
            {{ name }}
          </span>
        </a>
      </nav>
      <div class="switch w-50px lt-xs:hidden lt-xs:order-3">
        <CoreSwitch v-model="switchValue" @click="toggleTheme" />
      </div>
      <div @click="toggleMenu" class="menu w-max cursor-pointer hidden lt-xs:flex lt-xs:order-1">
        <div
          class="relative mx-12px w-8px h-8px bg-accent-dark rounded-full dark:bg-accent-light after:content-empty after:absolute after:w-8px after:h-8px after:rounded-full after:bg-accent-dark after:top-0 after:right-12px dark:after:bg-accent-light before:absolute before:content-empty before:w-8px before:h-8px before:bg-accent-dark before:rounded-full before:top-0 before:left-12px dark:before:bg-accent-light"
        />
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.active-menu {
  @apply h-100dvh grid grid-cols-3;
  .nav-wrapper {
    @apply w-full gap-20px flex flex-wrap items-center justify-center col-span-3 -mt-300px lt-xs:justify-between;
    .nav-links {
      @apply text-24px leading-32px lt-xs:text-16px;
    }
  }
  .switch {
    @apply w-full flex justify-end;
  }
}
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
