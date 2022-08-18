<template>
    <div class="grid grid-cols-3  grid-flow-row bg-slate-300 p-4 rounded  w-full h-full ">
        <div v-for="index in 9" :key="index" class="m-9  cursor-pointer relative p-5 group bg-white border-t-[12px]
            rounded-lg transition-all duration-200 delay-100 ease-in-out hover:shadow-xl hover:shadow-secondary-100 ">
            <div class=" flex flex-col ">
                <div class=" flex  justify-center ">
                    <img src="https://img.freepik.com/premium-vector/programing-concept-program-code-white-isolated-background_197170-769.jpg?w=2000"
                        alt="img" class=" h-44 rounded-lg w-fit  ">
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