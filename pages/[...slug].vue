<template>
  <main>
    <ContentDoc class="prose prose-gray max-w-none">
      <div class="min-h-screen">
        <main>
          <section class="lg:px-[15%] px-[5%] pt-20">
            <h1
              class="lg:text-5xl text-4xl leading-normal font-semibold text-center"
            >
              Check Out Our Latest Blog Posts
            </h1>

            <h1
              class="lg:text-6xl text-4xl text-center leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
            >
              Learn, Share, Grow
            </h1>
          </section>
        </main>
        <nuxt-link to="/CardDetails">
          <Card />
        </nuxt-link>
      </div>

      <template #not-found>
        <h1 class="text-2xl">Not Found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>