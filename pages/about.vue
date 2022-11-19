<template>
    <div class="max-w-4xl grid grid-cols-1 gap-8 justify-items-center  py-10 m-auto sm:px-8 text-dark dark:text-light">
        <div>
            <div>
                <NuxtLink v-for="project in projects" :key="project.id" :to="project._path">
                    <div
                        class="grid grid-cols-3 w-125 h-40 rounded overflow-hidden shadow-lg bg-light dark:bg-dark mx-2 drop-shadow-[2px_2px_0px_#4F009D] border-2 border-dark dark:border-light transition ease-in-out hover:-translate-y-1 hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                        <div class="col-span-1 overflow-hidden ">
                            <img src="">
                        </div>
                        <div class="col-span-2">
                            <div class="px-2">
                                <div class="font-bold text-lg mt-1"> {{ project.title }} </div>
                                <p class="text-gray-700 text-xs">
                                    {{ project.description}}
                                </p>
                            </div>
                            <div class="px-4 mt-2">
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1.5 mb-1">Laravel</span>
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1.5 mb-1">Livewire</span>
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1.5 mb-1">TailwindCss</span>
                                <span
                                    class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1.5 mb-1">Alpine
                                    js</span>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

const { data: projects, pending: projectPending } = await useAsyncData("projects", () =>
    queryContent("projects").where({ _partial: true, _type: "markdown" }).find()
);
</script>