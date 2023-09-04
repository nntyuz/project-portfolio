<template>
  <section class="hero-section py-150px lt-sm:pb-40px" id="hero">
    <div class="w-container flex gap-40px lt-sm:flex-col">
      <div
        class="w-full flex flex-col gap-20px max-w-600px lt-xxl:max-w-500px lt-lg:max-w-full lt-lg:min-w-410px lt-xxs:min-w-auto"
      >
        <h3 class="section-sub">
          Мария Аникина - <span class="text-accent">Motion Deisgner</span>
        </h3>
        <h1 class="text-52px leading-60px lt-xxl:text-46px lt-xxl:leading-52px lt-xxs:text-38px">
          Привет, я Маша!
          <br />
          <span class="flex items-end text-nowrap relative lt-lg:text-wrap"
            >Люблю чай, гладить<br class="lt-lg:hidden" />
            котиков и делать
            <div
              class="i-custom:arrow-down-right absolute right-30px text-70px lt-xxl:right-0 lt-xxs:text-50px"
            />
          </span>
          <div class="relative w-full h-60px overflow-hidden lt-xs:h-40px">
            <span class="absolute overflow-hidden text-nowrap text-accent move"
              >стильно пиздато классно красиво дорого стильно пиздато классно красиво дорого стильно
              пиздато классно красиво дорого</span
            >
          </div>
        </h1>
        <CoreSocial />
      </div>
      <div class="block rounded-10 select-none">
        <img src="/hero-img.jpg" alt="This is me!" class="block rounded-10 w-full h-full" />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.move {
  animation: move 15s infinite linear;
  @keyframes move {
    from {
      left: 0px;
    }
    to {
      left: -1200px;
    }
  }
}
</style>
