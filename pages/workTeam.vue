<template>
    <div class="flex justify-center">
        <div class="max-w-3xl px-4 py-10 m-auto sm:px-8 text-dark dark:text-light">
            <div flex="~ col" class="text-center">
                <div class="flex justify-center mb-6">
                    <ColorScheme placeholder="...">
                        <svg class="w-[20%] self-center" viewBox="0 0 156 189" xmlns="http://www.w3.org/2000/svg">
                            <path :class="
                                colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'
                            "
                                d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z" />
                        </svg>
                    </ColorScheme>
                </div>
                <span class="text-2xl md:text-4xl font-bold">فريق النخبة المطورين</span>
                <span class="text-xl md:text-3xl font-bold">CSIT Elites Developers</span>
            </div>

            
            <WorkTeamMembers />

        </div>

    </div>
</template>

<script setup>
import { filename } from "pathe/utils";
const colorMode = useColorMode();




const { data: core, pending: corePending } = await useAsyncData("core", () =>
    queryContent("_core").where({ _partial: true }).find()
);

const glob = import.meta.glob("~/assets/*.jpg", { eager: true });
const dynamicImages = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>