<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" dir="rtl"/>
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
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
