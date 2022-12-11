<template>
    <div class="max-w-4xl grid grid-cols-1 gap-8 justify-items-center  py-10 m-auto sm:px-8 text-dark dark:text-light">
        <div>
            <div class="w-full">
                <NuxtLink class="no-underline" v-for="project in projects" :key="project.id" :to="project._path">
                    <div
                        class="md:grid md:grid-cols-3 mb-15 md:w-125 w-72 md:h-40 rounded overflow-hidden shadow-lg bg-light dark:bg-dark mx-2 drop-shadow-[2px_2px_0px_#4F009D] border-2 border-dark dark:border-light transition ease-in-out hover:-translate-y-1 hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                        <div class="col-span-1 overflow-hidden self-center dark:bg-light">
                            <img v-if="project.img" class="w-full self-center flex justify-center md:h-full h-72" :src="dynamicImages[project.img]">
                            <div v-if="project.img2" class="self-center flex justify-center">
                                <img class="w-[80%] m-6" :src="dynamicImages[project.img2]">
                            </div>
                        </div>
                        <div class="col-span-2 flex flex-col justify-between">
                            <div class="px-2">
                                <div class="font-bold mt-1">
                                    <p class="text-base md:text-lg text-dark dark:text-light"> {{ project.title }} </p>
                                </div>
                                <p class="text-gray-700 text-xs text-dark dark:text-light">
                                    {{ project.description }}
                                </p>
                            </div>
                            <div class="px-1 md:px-4 mb-2 mt-2 md:mt-0">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1.5 md:mb-1">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { filename } from "pathe/utils";
const colorMode = useColorMode();

const { data: projects, pending: projectPending } = await useAsyncData("projects", () =>
    queryContent("_projects").where({ _partial: true, _type: "markdown" }).find()
);

const glob = import.meta.glob("~/assets/*.*", { eager: true });
// 
const dynamicImages = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
// const dynamicImages2 = Object.fromEntries(
//     Object.entries(glob2).map(([key, value]) => [filename(key), value.default])
// );
</script>

