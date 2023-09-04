<script setup>
const experience = [
  ['FPR Digital-agency', 'декабрь 2021 - наст.время'],
  ['Freelance', 'июль 2020 - наст.время'],
  ['Телеканал М24 (МСО)', 'февраль 2021 - декабрь 2021'],
]
</script>

<template>
  <section class="what-section padding-1">
    <div class="w-container flex flex-col mb-30px">
      <h3 class="section-sub">Опыт работы</h3>
    </div>
    <div class="flex flex-col border-b border-accent-purple">
      <div
        v-for="([title, time], index) in experience"
        :key="index"
        class="column-wrapper relative z-2 border-t overflow-hidden border-accent-purple after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:content-empty after:-translate-y-1/2 after:-translate-x-1/2 after:opacity-0 after:bg-accent-purple after:rotate-90 after:h-10px after:w-full hover:after:opacity-100 hover:after:h-[1920px]"
      >
        <div class="w-container flex items-center justify-between min-h-200px">
          <div class="flex flex-col">
            <div class="sub">Motion Designer</div>
            <div class="title">{{ title }}</div>
            <div class="time transition-all duration-500 lt-xxs:text-12px">{{ time }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
