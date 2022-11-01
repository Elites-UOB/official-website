<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - نادي النخبة المطورين` : 'نادي النخبة المطورين';
    }
  })
</script>