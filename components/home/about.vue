<script setup>
const programms = [
  ['After Effects', 98],
  ['Blender', 95],
  ['Photoshop', 90],
  ['Illustrator', 80],
  ['Figma', 80],
]
</script>

<template>
  <section class="about-section padding-1" id="about">
    <div class="w-container flex flex-col gap-20px">
      <h3 class="section-sub">Обо мне</h3>
      <h2
        class="text-40px leading-52px mb-10 lt-xxl:text-34px lt-xxl:leading-46px lt-xxl:mb-5 lt-sm:text-24px lt-sm:leading-34px lt-xs:mb-2"
      >
        Я квалифицированный <span class="text-accent">3D моушн-дизайнер</span> с акцентом на
        создание высококачественного и впечатляющего цифрового опыта
      </h2>
      <div class="flex items-center justify-between gap-30px flex-wrap lt-lg:justify-center">
        <div
          v-for="([title, current], index) in programms"
          :key="index"
          class="flex flex-col items-center min-w-180px gap-10px lt-xxl:min-w-170px lt-lg:min-w-250px lt-sm:min-w-130px lt-xxs:min-w-84px"
        >
          <h2 class="lt-sm:text-14px lt-xs:text-12px">{{ title }}</h2>
          <CoreProgressCircle :current="current" :max="100" />
        </div>
      </div>
    </div>
  </section>
</template>
