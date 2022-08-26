<template>
  <div position="sticky" top="0" border="b light opacity-15" bg="dark" p="y-5">
    <nav w="full">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <NuxtLink
          to="/"
          decoration="none"
          self="center"
          mb="4"
          text="2xl light"
          font="bold"
          whitespace="nowrap"
          >فريق النخبة البرمجي</NuxtLink
        >

        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="isOpen = true">
            <svg
              class="h-8 w-8 fill-current text-black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div class="hidden md:block space-x-8">
          <div flex="~ gap-25px">
            <span
              v-for="nav in navigations"
              @click="router.push(nav._path)"
              cursor="pointer"
              :key="nav._path"
              :class="$route.fullPath == nav._path ? 'text-light' : 'text-mid'"
              text="20px"
              font="bold"
              >{{ nav.title }}</span
            >
          </div>
        </div>

        <!-- Dark Background Transition -->
        <!-- <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition> -->

        <!-- toggle Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-dark fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close" flex="~" justify="between">
            
            <button
              class=" top-0 right-0 mt-4 mr-4 mb-4"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div class="mt">
              <a href="https://discord.gg/e6E9RQHx" items="center">
                <div i-jam-discord text="light" h="48px" w="48px"></div>
                </a>
            </div>
          </div>
          

          

          <ul class=" font-sans m-0 p-4">
            <li  grid="~ cols-1 gap-1" class=" hover hover:text-dark">
                <span class="  hover hover:text-green" border="b light opacity-15"
                  v-for="nav in navigations"
                  @click="router.push(nav._path)"
                  cursor="pointer"
                  :key="nav._path"
                  :class="
                    $route.fullPath == nav._path ? 'text-light' : 'text-mid'
                  "
                  text="20px"
                  
                  >{{ nav.title }}</span
                >
            </li>

              
            
          </ul>
        </aside>

        <div class="flex">
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
// export default {
//   data() {
//     return {
//       isOpen: false
//     };
//   },
//   methods: {
//     drawer() {
//       this.isOpen = !this.isOpen;
//     }
//   },
//   watch: {
//     isOpen: {
//       immediate: true,
//       handler(isOpen) {
//         if (process.client) {
//           if (isOpen) document.body.style.setProperty("overflow", "hidden");
//           else document.body.style.removeProperty("overflow");
//         }
//       }
//     }
//   },
//   mounted() {
//     document.addEventListener("keydown", e => {
//       if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
//     });
//   }
// };
</script>
