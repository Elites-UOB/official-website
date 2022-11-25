<template>
    <div class="max-w-2xl px-4 py-10 m-auto sm:px-8 text-dark dark:text-light">
        <div class="flex justify-center mb-6">
            <ColorScheme placeholder="...">
                <svg class="w-[20%] self-center" viewBox="0 0 156 189" xmlns="http://www.w3.org/2000/svg">
                    <path :class="
                        colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'
                    " d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z" />
                </svg>
            </ColorScheme>
        </div>
        <div class="text-center mt-10">
            <p class="text-xl">Community@csitelites.tech</p>
            <p class="text-xl">جامعة البصرة - كلية علوم الحاسوب وتكنلوجيا المعلومات</p>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>