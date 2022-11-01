<template>
  <div class="sm:pt-6 sm:pb-10">
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

body {
  @apply bg-light dark:bg-dark;
}
code {
  direction:ltr;
}
</style>
