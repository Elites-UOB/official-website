<template>

    <div class="grid grid-cols-3 w-full gap-4 bg-black">
        <div class="">
            <span self="center" mb="4" text="xl mid" font="bold" whitespace="nowrap">لمجتمعٍ منتج تقنيًا </span>
            <div class="text-3xl font-bold text-light mt-6">تعلّم، شارك، وطوّر
            </div>
            <div class="text-xl text-mid mt-5">
                ضمن مشروع قادة التحول الرقمي. الفريق تابع
                رسميًاإلى كلية علوم الحاسوب وتكنولوجيا
                المعلومات، جامعة البصرة.
            </div>
        </div>
        <!-- ... -->
        <div class="">
            <svg width="296" height="449" viewBox="0 0 696 849" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M344.92 142.769L0 0V92.3893V142.769V285.538V428.308V560.495V702.159V703.265L344.92 848.324L696 703.265V560.495L344.92 703.265L123.186 611.484V479.297L344.92 571.077L696 428.308V285.538L344.92 428.308L123.186 336.527V193.758L344.92 285.538L696 142.769V0L344.92 142.769Z"
                    fill="white" />
            </svg>


        </div>
        <!-- ... -->
        <div class="w-full bg-dark ">
            <div class="p-4 bg-dark rounded-lg md:p-8 ">
                <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl sm:grid-cols-3 xl:grid-cols-6 ">
                    <div class="flex flex-col justify-center items-center ">
                        <dt class="mb-2 text-3xl font-extrabold">+34</dt>
                        <dd class="font-bold text-mid mb-4">مشروعًا </dd>
                        <dt class="mb-2 text-3xl font-extrabold">+34</dt>
                        <dd class="font-bold text-mid">متدربًا</dd>
                    </div>
                    <div class="flex flex-col justify-center items-center ml-40">
                        <dt class="mb-2 text-3xl font-extrabold">+34</dt>
                        <dd class="font-bold text-mid mb-4">حدثًا</dd>
                        <dt class="mb-2 text-3xl font-extrabold">+34</dt>
                        <dd class="font-bold text-mid">صفًا</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['num', 'description'])
</script>