<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const route = useRoute()

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
    { name: 'og:title', content: `${route.meta.title} - نادي النخبة المطورين` },
    {
      name: 'og:description', content: `نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع
المحلي، الفريق ضمن مشروع قادة التحوّل الرقمي التابع رسميًا إلى جامعة
البصرة، كلية علوم الحاسوب وتكنولوجيا المعلومات.`
    },
    { name: 'og:image', content: "/cover.jpg" },
    { name: 'og:url', content: route.fullPath },
    { name: 'twitter:title', content: `${route.meta.title} - نادي النخبة المطورين` },
    {
      name: 'twitter:description', content: `نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع
المحلي، الفريق ضمن مشروع قادة التحوّل الرقمي التابع رسميًا إلى جامعة
البصرة، كلية علوم الحاسوب وتكنولوجيا المعلومات.`
    },
    { name: 'twitter:image', content: "/cover.jpg" },
    { name: 'twitter:card', content: 'summary_large_image' },

  ]


})
</script>