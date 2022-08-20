<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  // title: 'My App',
  titleTemplate: (title) => `Csit Elites - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Csit Elites Blog' },
    { property: 'og:title', content: 'Csit Elites'},
    { property: 'og:site_name', content: 'Csit Elites'},
    { property: 'og:description', content: 'Csit Elites Blog'},
    { property: 'og:image', content: '~/assets/CoreTeamLogo.png'}
  ],
  bodyAttrs: {
    class: 'bg-dark'
  }
})

</script>