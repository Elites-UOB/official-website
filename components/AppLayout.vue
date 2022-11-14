<template>
  <div class="sm:pt-6 sm:pb-10">
    <AppLoadingBar />
    <AppNavbar />
    <slot />


    <div v-if="$route.path !== '/'" class="max-w-lg px-4 mt-20 pt-10 m-auto sm:px-8 text-center text-dark dark:text-light">
      <!-- <p class="text-md font-semibold text-center mb-3 mt-20">
        يمكنك المساهمة في تطوير المجتمع المحلي
      </p>

      <div class="flex justify-around text-center">
        <div class="mt-5 md:mt-2 flex flex-col">
          <span class="self-center">
            <Icon name="fluent-emoji:man-teacher-light" class="h-14 w-14 md:w-14 md:h-14" />
          </span>
          <p class="mt-2 text-sm">عبر تقديم الجلسات في مجال خبرتك.</p>
        </div>
        <div class="mt-5 md:mt-2 flex flex-col">
          <span class="self-center">
            <Icon name="fluent-emoji:handshake" class="h-14 w-14 md:w-14 md:h-14" />
          </span>
          <p class="mt-2 text-sm">عبر الدعم ورعاية الأحداث للنادي.</p>
        </div>
      </div> -->

      <NuxtLink to="/" decoration="none" class="text-mid opacity-50 hover:opacity-100 font-semibold text-lg mt-10">
        نادي النخبة المطورين - 2022
      </NuxtLink>
    </div>

  </div>
</template>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

body {
  @apply bg-light dark: bg-dark;
}

code {
  direction: ltr;
}
</style>
