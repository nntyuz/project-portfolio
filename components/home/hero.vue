<template>
  <section class="hero-section py-150px">
    <div class="w-container flex gap-40px">
      <div class="w-full flex flex-col gap-20px max-w-600px">
        <h3 class="tracking-widest text-14px leading-20px">
          Мария Аникина - <span class="text-accent">Motion Deisgner</span>
        </h3>
        <h1 class="text-52px leading-60px">
          Привет, я Маша!
          <!-- <span
            class="relative z-2 after:absolute after:w-180px after:h-10px after:content-empty after:bg-accent-purple after:left-0 after:bottom-7px after:-z-1"
            >Маша!</span> -->
          <br />
          <span class="flex items-end text-nowrap relative"
            >Люблю чай, гладить<br />
            котиков и делать
            <div class="i-custom:arrow-down-right absolute right-30px text-70px" />
          </span>
          <div class="relative w-full h-60px overflow-hidden">
            <span class="absolute overflow-hidden text-nowrap text-accent move"
              >стильно пиздато классно красиво дорого стильно пиздато классно красиво дорого стильно
              пиздато классно красиво дорого</span
            >
          </div>
        </h1>
        <CoreSocial />
      </div>
      <img src="/hero-img.jpg" alt="This is me!" class="rounded-10 max-h-500px select-none" />
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
