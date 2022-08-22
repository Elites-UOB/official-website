<template>
  <main>
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <!-- Slot if document is not found -->
      <template #not-found>
          <div flex="~ col" align="center">
            <h1 class="text-2xl">
            الصفحة غير موجودة!
            </h1>
            <NuxtLink to="/" class="text-2xl" color="mid">الصفحة الرئيسيّة</NuxtLink>
          </div>
      </template>
    </ContentDoc>
  </main>
</template>