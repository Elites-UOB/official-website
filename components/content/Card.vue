<template>
    <div class="bg-slate-300 p-4 rounded w-88 flex w-full h-full grid grid-rows-3">
        <div v-for="index in 10" :key="index" class="m-9  cursor-pointer relative p-5 group bg-white border-t-[12px]
            rounded-lg transition-all duration-200 delay-100 ease-in-out hover:shadow-xl hover:shadow-secondary-100 ">
            <div class=" flex flex-col ">
                <div>
                    <img src="https://img.freepik.com/premium-vector/programing-concept-program-code-white-isolated-background_197170-769.jpg?w=2000"
                        alt="img" class="w-77 h-44 rounded-lg">
                </div>
                <div class="text-xl font-bold flex justify-center text-gray-600 group">
                    <slot name="title" />
                </div>
                <div class="text-xl  tracking-tight text-gray-900">
                    <slot name="description" />
                </div>
            </div>
        </div>
    </div>
</template>