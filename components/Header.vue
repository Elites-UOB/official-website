<template>
  <div position="sticky" top="0" border="b light opacity-15" bg="dark" pb="5">
    <nav w="full">
      <div class="flex flex-wrap justify-between items-center mx-10">
        <NuxtLink to="/" decoration="none" self="center" mb="4" text="2xl light" font="bold" whitespace="nowrap">فريق
          النخبة البرمجي</NuxtLink>

        <div class="hidden md:block space-x-8">
          <div flex="~ gap-25px">
            <span v-for="nav in navigations" @click="router.push(nav._path)" cursor="pointer" :key="nav._path"
              :class="$route.fullPath == nav._path ? 'text-light' : 'text-mid'" text="20px" font="bold">{{ nav.title
              }}</span>
          </div>
        </div>
        <!-- toggle Menu -->
        <div class="md:hidden ">
          <button @click="isOpen = true" class="rounded bg-light">
            <svg class="h-8 w-8 fill-current text-black bg-light pt-1.1" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-dark fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <div class="close" flex="~" justify="between">
            <button class=" top-0 right-0 mt-4 mr-4 mb-4 bg-dark border-none" @click="isOpen = false">
              <svg class="w-6 h-6 mt-2  " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" class="text-light "></path>
              </svg>
            </button>
            <div class="mt">
              <a href="https://discord.gg/e6E9RQHx" items="center">
                <div i-jam-discord text="light" h="48px" w="48px"></div>
              </a>
            </div>
          </div>
          <ul class=" font-sans m-0 p-4">
            <li grid="~ cols-1 gap-1">
              <span class="  hover hover:text-green" border="b light opacity-15" v-for="nav in navigations"
                @click="router.push(nav._path), isOpen = false" cursor="pointer" :key="nav._path" :class="
                  $route.fullPath == nav._path ? 'text-light' : 'text-mid'
                " text="20px">{{ nav.title }}</span>
            </li>
          </ul>
        </aside>
        <div class=" hidden md:block space-x-8">
          <a href="https://discord.gg/e6E9RQHx" items="center">
            <div i-jam-discord text="light" h="48px" w="48px"></div>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { data: navigations } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const router = useRouter();
const isOpen = ref(false)
</script>
