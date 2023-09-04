<script setup>
const skills = [
  ['3D', 'В блендере моя сила и мудрость! Давайте делать пиздато, а не пиздато не делать'],
  ['Моушн-дизайн', 'Анимации и эпичные эффекты! Сделаю лучше, чем клип "Morgenshtern - Дуло"'],
  [
    'Графика',
    'Хотите заказать котиков с рогами, в костюме космоновтов с чашечкой чая в лапке? Эх, жаль, но я открыта для всех предложений ',
  ],
  // ['Визуал', 'Вы большой бренд? Если еще нет, я иду к вам! А если да, вы обратились по адресу'],
  // ['Концепты', 'Хотите показать что-то несуществуеще на все деньги? Отлично, я в деле'],
  // [
  //   'Интерфейсы',
  //   'Так еба че тут у нас? Блок сюда, иконку воткнуть, так подгоним размерчик, градиент тыкнем, так падажжи ебана',
  // ],
  // ['Брендинг', 'Получится точно лучше чем Вкусно и точка'],
]
</script>

<template>
  <section class="what-section padding-1">
    <div class="w-container flex flex-col mb-30px">
      <h3 class="section-sub">Что я делаю</h3>
    </div>
    <div class="flex flex-col border-b border-accent-purple">
      <div
        v-for="([title, sub], index) in skills"
        :key="index"
        class="column-wrapper relative z-2 border-t overflow-hidden border-accent-purple after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:content-empty after:-translate-y-1/2 after:-translate-x-1/2 after:opacity-0 after:bg-accent-purple after:rotate-90 after:h-10px after:w-full hover:after:opacity-100 hover:after:h-[1920px]"
      >
        <div class="w-container flex items-center justify-between min-h-150px">
          <div class="title">{{ title }}</div>
          <div class="sub text-accent-light dark:text-accent-dark">{{ sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
