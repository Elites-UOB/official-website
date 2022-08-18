<!-- <template>

    <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a class="flex items-center">
                <img src="~/assets/CoreTeamLogo.png" class="mr-2 h-9 sm:h-12" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">CSIT</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                    aria-expanded="false"
                    class="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div class="hidden relative md:block">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar"
                        class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 "
                        placeholder="Search...">
                </div>
                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="search-navbar"
                        class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Search...">
                </div>
                <ul
                    class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NuxtLink to="/home"
                            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                            Home
                        </NuxtLink>

                    </li>
                    <li>
                        <NuxtLink to="/about"
                            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/services"
                            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                            Services
                        </NuxtLink>

                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template> -->

<template>
    <header class="flex items-center bg-gray-80 justify-between h-20 px-[5%] lg:px-[15%]">
        <a class="flex items-center">
            <img src="~/assets/CoreTeamLogo.png" class="mr-2 h-9 sm:h-12" alt="CSIT Logo">
            <span class="font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">CSIT</span>
        </a>
        <nav class="flex items-center space-x-7 text-gray-600">
            <template v-for="(n, i) in links" :key="`navLink-${i}`">
                <NuxtLink :to="n.link" class="inline-block nav-link hover:text-primary group">
                    <div class="flex items-center space-x-2">
                        <Icon :icon="n.icon" class="w-4 h-4" />
                        <span class="font-medium"> {{ n.name }}</span>
                    </div>
                    <div
                        class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all">
                    </div>
                </NuxtLink>
            </template>
        </nav>
    </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links = [
    {
        name: "Blog",
        icon: "carbon:blog",
        link: "/",
    },
    {
        name: "About",
        icon: "ion:shirt-outline",
        link: "/about",
    },
];
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
    @apply text-primary;
}
</style>