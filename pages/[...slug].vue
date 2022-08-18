<template>
  <main>
    <ContentDoc class="props props-gray">
      <!-- slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">Page Not Found</h1>
      </template>
    </ContentDoc>
  </main>
</template>
