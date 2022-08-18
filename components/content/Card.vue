<template>
    <div class="grid md:grid-cols-2 gap-4 lg:grid-cols-4 grid-flow-row p-4 rounded h-full">
        <div v-for="card in cards" :key="card.id" class="mx-9 cursor-pointer relative p-5 group bg-slate-200 border-t-[12px]
            rounded-lg transition-all duration-200 delay-100 ease-in-out hover:shadow-md hover:shadow-secondary-50 ">
            <div class="flex flex-col ">
                <div>
                    <img src="https://img.freepik.com/premium-vector/programing-concept-program-code-white-isolated-background_197170-769.jpg?w=2000"
                        alt="img" class="h-56 rounded-lg w-[100%]  ">
                </div>
                <div class="text-3xl font-bold flex justify-center text-gray-600 group">
                    <!-- <slot name="title"/> -->
                    {{card.title}}

                </div>
                <!-- <div class="text-xl  tracking-tight text-gray-900">
                    <slot name="description" />
                </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>

const cards =[
    {
        id:1,
        title:'html',
    },
    {
        id:2,
        title:'css',
    },
    {
        id:2,
        title:'nuxt',
    },
    {
        id:2,
        title:'laravel',
    }
]

</script>