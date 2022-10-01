<template>
  <div class="max-w-2xl px-4 py-10 m-auto sm:px-8">
    <main class="prose prose-gray text-dark dark:text-light dark:prose-invert max-w-none">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
