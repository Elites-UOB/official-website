<template>

    <header class="flex items-center bg-gray-50 justify-between h-20 lg:px-10">
        <a href="/" class="flex items-center">
            <img src="~/assets/CoreTeamLogo.png" class="mr-2 h-9 sm:h-12" alt="CSIT Logo">
            <span class="font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">CSIT</span>
        </a>
        <nav class="flex items-center space-x-7 text-gray-600">
            <template v-for="(n, i) in links" :key="`navLink-${i}`">
                <NuxtLink :to="n.link" class="inline-block text-2xl underline-offset-0 nav-link hover:text-primary group">
                    <div class="flex items-center space-x-2">
                        <Icon :icon="n.icon" class="w-4 h-4" />
                        <span class="font-xl"> {{ n.name }}</span>
                    </div>
                </NuxtLink>
            </template>
        </nav>
    </header>
</template>

<script setup>
import { Icon } from "@/iconify/vue";
const links = [
    {
        name: "Blog",
        // icon: "carbon:blog",
        link: "/",
    },
    {
        name: "About",
        // icon: "ion:shirt-outline",
        link: "/about",
    },
];
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
    @apply text-primary;
}
</style>

    <div>
     
    </div>
</template>

