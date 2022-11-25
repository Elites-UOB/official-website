<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const metaTitle = route.meta.title ?? 'نادي النخبة المطورين'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - نادي النخبة المطورين` : 'نادي النخبة المطورين';
  },
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  bodyAttrs: {
    class: 'bg-light dark:bg-dark m-0 p-0 font-tajawal text-mid',
  },
  meta: [
    { name: 'og:title', content: `${metaTitle}` },
    {
      name: 'og:description', content: `نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع المحلي.`
    },
    { name: 'og:image', content: "/cover.jpg" },
    { name: 'og:url', content: route.fullPath },
    { name: 'twitter:title', content: `${metaTitle}` },
    {
      name: 'twitter:description', content: `نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع المحلي.`
    },
    { name: 'twitter:image', content: "/cover.jpg" },
    { name: 'twitter:card', content: 'summary_large_image' },

  ]

})
</script>
<style lang="scss">
  h1 {
    text-decoration: none;
  }
</style>