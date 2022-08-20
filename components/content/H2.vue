<template>
  <h2 :id="id" flex="~ gap-4" w="fit" class="group" items="center">
    <a color="#fff" decoration="none" p="y-2 x-4" bg="light opacity-10" border="~ dark hover:mid hover:dashed" :href="`#${id}`">
      <slot />
    </a>
    <div text="light" class="invisible group-hover:visible i-akar-icons-link-chain"></div>
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>