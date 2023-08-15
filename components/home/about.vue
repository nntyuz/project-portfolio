<script setup>
const programms = [
  ['Adobe After Effects', 98],
  ['Blender', 95],
  ['Adobe Photoshop', 90],
  ['Figma', 80],
  ['Adobe Illustrator', 80],
]
</script>

<template>
  <section class="about-section padding-1" id="about">
    <div class="w-container flex flex-col gap-20px">
      <h3 class="tracking-widest text-14px leading-20px">Обо мне</h3>
      <h2 class="text-40px leading-52px mb-10">
        Я квалифицированный <span class="text-accent">3D моушн-дизайнер</span> с акцентом на
        создание высококачественного и впечатляющего цифрового опыта
      </h2>
      <div class="flex items-center justify-between gap-30px flex-wrap">
        <div
          v-for="([title, current], index) in programms"
          :key="index"
          class="flex flex-col items-center min-w-180px gap-10px"
        >
          <h2>{{ title }}</h2>
          <CoreProgressCircle :current="current" :max="100" />
        </div>
      </div>
    </div>
  </section>
</template>
