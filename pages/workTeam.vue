<template>
    <div class="flex justify-center">
        <div class="max-w-3xl px-4 py-10 m-auto sm:px-8 text-dark dark:text-light">
            <div flex="~ col" class="text-center">
                <div class="flex justify-center mb-6">
                    <ColorScheme placeholder="...">
                        <svg class="w-[20%] self-center" viewBox="0 0 156 189" xmlns="http://www.w3.org/2000/svg">
                            <path :class="
                                colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'
                            " d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z" />
                        </svg>
                    </ColorScheme>
                </div>
                <span class="text-2xl md:text-4xl font-bold">فريق النخبة المطورين</span>
                <span class="text-xl md:text-3xl font-bold">CSIT Elites Developers</span>
            </div>

            <!-- core team -->
            <p class="text-3xl md:text-2xl font-semibold mb-1 mt-12 mr-2 md:mr-0">
                الفريق الإداري
            </p>
            <div v-if="corePending" class="flex justify-center">
                <svg class="w-[20%]" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0" xml:space="preserve">
                    <path :class="colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                            from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>

            <div v-else class="flex justify-around self-center md:justify-between mt-2 mr-2">
                <div class="flex flex-col">
                    <div v-for="(member, i) in core[0]?.members" :key="member.id">
                        <div v-if="i % 2 == 0" class="flex flex-col md:flex-row mt-5 group">
                            <div
                                class="self-center drop-shadow-[2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[member.img]" alt="" />
                            </div>
                            <div class="self-center text-center md:text-right md:mr-5">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ member.name }}
                                </div>
                                <div class="text-sm md:text-base">{{ member.label }}</div>
                                <div v-if="member.label2" class="text-sm md:text-base">{{ member.label2 }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-auto mx-10 hidden lg:block">
                    <svg class="mt-2 lg:mt-1" width="105" height="127" viewBox="0 0 105 127" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.00267" y="74.5" width="70" height="70" transform="rotate(-45 3.00267 74.5)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="3.12132" y="51.6188" width="70" height="70" transform="rotate(-45 3.12132 51.6188)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="14.4309" y="62.9282" width="54.0061" height="54.0061"
                            transform="rotate(-45 14.4309 62.9282)" fill="#4F009D" class="stroke-dark dark:stroke-light"
                            stroke-width="3" />
                    </svg>
                </div>
                <div class="flex flex-col items-end">
                    <div v-for="(member, i) in core[0]?.members" :key="member.id">
                        <div v-if="i % 2 != 0" class="flex flex-col md:flex-row mt-5 group">
                            <div class="self-center md:mr-0 md:ml-5 text-center md:text-left order-2 md:order-1">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ member.name }}
                                </div>
                                <div class="text- md:text-base">{{ member.label }}</div>
                            </div>
                            <div
                                class="self-center order-1 lg:order-2 drop-shadow-[-2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] group-hover:drop-shadow-[-4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[member.img]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- projects team -->
            <p class="text-3xl md:text-2xl font-semibold mb-1 mt-16 mr-2 md:mr-0">
                فريق المشاريع
            </p>
            <div v-if="corePending" class="flex justify-center">
                <svg class="w-[20%]" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0" xml:space="preserve">
                    <path :class="colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                            from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>

            <div v-else class="flex justify-around self-center md:justify-between mt-2 mr-2">
                <div class="flex flex-col">
                    <div v-for="(projectsTeam, i) in core[0]?.projectsTeam" :key="projectsTeam.id">
                        <div v-if="i % 2 == 0" class="flex flex-col md:flex-row mt-5 group">
                            <div
                                class="self-center drop-shadow-[2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[projectsTeam.img]" alt="" />
                            </div>
                            <div class="self-center mt-2 text-center md:text-right md:mr-5">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ projectsTeam.name }}
                                </div>
                                <div class="text-sm md:text-base">{{ projectsTeam.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-auto mx-10 hidden lg:block">
                    <svg class="mt-2 lg:mt-1 mr-6" width="105" height="127" viewBox="0 0 105 127" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.00267" y="74.5" width="70" height="70" transform="rotate(-45 3.00267 74.5)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="3.12132" y="51.6188" width="70" height="70" transform="rotate(-45 3.12132 51.6188)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="14.4309" y="62.9282" width="54.0061" height="54.0061"
                            transform="rotate(-45 14.4309 62.9282)" fill="#4F009D" class="stroke-dark dark:stroke-light"
                            stroke-width="3" />
                    </svg>
                </div>
                <div class="flex flex-col items-end">
                    <div v-for="(projectsTeam, i) in core[0]?.projectsTeam" :key="projectsTeam.id">
                        <div v-if="i % 2 != 0" class="flex flex-col md:flex-row mt-5 group">
                            <div class="self-center mt-2 md:mr-0 md:ml-5 text-center md:text-left order-2 md:order-1">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ projectsTeam.name }}
                                </div>
                                <div class="text-sm md:text-base">{{ projectsTeam.label }}</div>
                            </div>
                            <div
                                class="self-center order-1 lg:order-2 drop-shadow-[-2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] group-hover:drop-shadow-[-4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[projectsTeam.img]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- projects team -->
            <p class="text-3xl md:text-2xl font-semibold mb-1 mt-16 mr-2 md:mr-0">
                فريق الأعلام
            </p>
            <div v-if="corePending" class="flex justify-center">
                <svg class="w-[20%]" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"
                    enable-background="new 0 0 0 0" xml:space="preserve">
                    <path :class="colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                            from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>

            <div v-else class="flex justify-around self-center md:justify-between mt-2 mr-2">
                <div class="flex flex-col">
                    <div v-for="(media, i) in core[0]?.media" :key="media.id">
                        <div v-if="i % 2 == 0" class="flex flex-col md:flex-row mt-5 group">
                            <div
                                class="self-center drop-shadow-[2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[media.img]" alt="" />
                            </div>
                            <div class="self-center mt-2 text-center md:text-right md:mr-5">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ media.name }}
                                </div>
                                <div class="text-sm md:text-base">{{ media.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-auto mx-10 hidden lg:block">
                    <svg class="mt-2 lg:mt-1 ml-4" width="105" height="127" viewBox="0 0 105 127" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.00267" y="74.5" width="70" height="70" transform="rotate(-45 3.00267 74.5)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="3.12132" y="51.6188" width="70" height="70" transform="rotate(-45 3.12132 51.6188)"
                            class="stroke-dark dark:stroke-light" stroke-width="3" />
                        <rect x="14.4309" y="62.9282" width="54.0061" height="54.0061"
                            transform="rotate(-45 14.4309 62.9282)" fill="#4F009D" class="stroke-dark dark:stroke-light"
                            stroke-width="3" />
                    </svg>
                </div>
                <div class="flex flex-col items-end">
                    <div v-for="(media, i) in core[0]?.media" :key="media.id">
                        <div v-if="i % 2 != 0" class="flex flex-col md:flex-row mt-5 group">
                            <div class="self-center mt-2 md:mr-0 md:ml-5 text-center md:text-left order-2 md:order-1">
                                <div class="text-base md:text-xl font-semibold">
                                    {{ media.name }}
                                </div>
                                <div class="text-sm md:text-base">{{ media.label }}</div>
                            </div>
                            <div
                                class="self-center order-1 lg:order-2 drop-shadow-[-2px_2px_0px_#4F009D] transition ease-in-out group-hover:-translate-y-1 group-hover:drop-shadow-[4px_4px_0px_#4F009D] group-hover:drop-shadow-[-4px_4px_0px_#4F009D] duration-200">
                                <img class="w-28 h-28 md:w-24 md:h-24 lg:h-16 lg:w-16 border-2 border-dark dark:border-light"
                                    :src="dynamicImages[media.img]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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