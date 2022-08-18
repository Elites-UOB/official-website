<template>
    <main>
        <div
            class="cursor-pointer relative p-5 group bg-white border-t-[12px]  rounded-lg transition-all duration-200 delay-100 ease-in-out hover:border-x-secondary-500 hover:border-b-secondary-500 hover:shadow-xl hover:shadow-secondary-100 border-secondary-500 hover:border-2">
            <div class="flex flex-col">
                <div class="flex items-center justify-between mt-3">
                    <div class="flex items-center gap-4 mb-3 text-secondary-600 group">
                        <h5 x-show="!name" class="text-xl font-bold tracking-tight text-secondary-700">
                            title
                        </h5>
                        <div class="flex items-center gap-4" @click.stop="">
                            <input  type="text" x-show="name"
                                class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>