<script setup>
const courses = [
  ['Дизайн текста (Сергей Телидченко, 2023) ', ' hover:text-accent-sand'],
  ['BLNDR 2.0 (Вольница, 2022) ', 'text-gray dark:text-gray hover:text-accent-purple'],
  ['Figma на максималках (Вольница, 2022) ', ' hover:text-accent-pink'],
  ['Blender 2.0 (Kaino, 2022) ', 'text-gray dark:text-gray hover:text-accent-yellow'],
  ['Курс по моушн-дизайну V3.0 (Мастерская Исаева, 2021) ', ' hover:text-accent-red'],
  [
    'Супер After Effects 2 (Videosmile.ru, 2021) ',
    'text-gray dark:text-gray hover:text-accent-emerald',
  ],
  ['Супер Моушн (Videosmile.ru, 2020)', ' hover:text-accent-blue'],
]
</script>

<template>
  <section class="courses-section">
    <div class="w-container flex flex-col gap-20px">
      <h3 class="section-sub">Курсы</h3>
      <p class="text-wrap">
        <span
          v-for="([item, color], index) in courses"
          :key="index"
          class="text-accent-dark text-50px transition-all dark:text-accent-light lt-xxl:text-46px lt-sm:text-28px lt-xxs:text-20px"
          :class="color"
        >
          {{ item }}
        </span>
      </p>
    </div>
  </section>
</template>
