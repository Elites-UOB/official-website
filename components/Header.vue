<template>
    <nav px="2" w="full">
        <div class="flex flex-wrap justify-between items-center mx-auto">
            <span self="center" mb="4" text="2xl mid" font="bold" whitespace="nowrap">فريق النخبة البرمجي</span>
            
            <div flex="~ gap-25px">
                <span v-for="nav in navigations" @click="router.push(nav._path)" cursor="pointer" :key="nav._path" :class="$route.fullPath == nav._path ? 'text-light' : 'text-mid'" text="20px" font="bold">{{ nav.title }}</span>
            </div>

            <div class="flex">
                <a href="https://discord.gg/e6E9RQHx" items="center">
                    <div i-jam-discord text="light" h="48px" w="48px"></div>
                </a>
            </div>
        </div>

    </nav>
</template>

<script setup>
const { data: navigations } = await useAsyncData('navigation', () => fetchContentNavigation())
const router = useRouter()
</script>