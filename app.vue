<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - نادي النخبة المطورين` : 'نادي النخبة المطورين';
    },
    bodyAttrs: {
      class: 'bg-light dark:bg-dark m-0 p-0 font-tajawal text-mid',
    }
  })
</script>