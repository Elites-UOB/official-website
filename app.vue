<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup>
useHead({
  script: [
    { src: 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js' }
  ]
})
</script>