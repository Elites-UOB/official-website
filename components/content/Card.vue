<template>
    <div class="bg-slate-300 p-4 rounded w-88">
        <div
            class="cursor-pointer relative p-5 group bg-white border-t-[12px]  rounded-lg transition-all duration-200 delay-100 ease-in-out  hover:shadow-xl hover:shadow-secondary-100 ">
            <div class="flex flex-col  ">
                <div>
                    <img src="https://img.freepik.com/premium-vector/programing-concept-program-code-white-isolated-background_197170-769.jpg?w=2000"
                        alt="ll" class="w-77 h-44 rounded-lg">
                </div>
                <h1 class="text-xl font-bold flex justify-center text-gray-600 group">
                        <slot name="title" />
                    <!-- <div class="flex items-center">
                        <input type="text" x-show="name"
                            class="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            required>
                    </div> -->
                </h1>
                <div class="text-xl  tracking-tight text-gray-900">
                    <slot name="description" />
                </div>
                
            </div>

        </div>

    </div>
</template>