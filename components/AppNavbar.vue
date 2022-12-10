<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto flex-col md:flex-row sm:px-8">
    <!-- Navigation -->
    <div class="flex text-mid flex">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold text-dark dark:text-light"
        class="md:ml-6 ml-4 text-mid hover:text-dark dark:hover:text-light"
        decoration="none"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="flex justify-end transition text-primary-500 mt-2 md:mt-0">
      <a v-if="appConfig.socials?.telegram" :href="`https://${appConfig.socials?.telegram}.t.me`" title="Telegram" class="mx-2 text-mid hover:text-dark dark:hover:text-light"><Icon name="fa-brands:telegram" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.organisation" :href="`https://github.com/Elites-UOB`" title="organisation" class="mx-2 text-mid hover:text-dark dark:hover:text-light"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <ColorModeSwitch class="mx-2 text-mid hover:text-dark dark:hover:text-light" />
    </div>
  </div>
</template>
