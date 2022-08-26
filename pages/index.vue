<template>

    <div  justify="center"  w="full"  md="flex justify-center " sm=" grid justify-center"   >
        <div w="1/4" md="text-start" text-center mt="6" >
            <span text="xl mid" whitespace="nowrap"  mt="6">لمجتمعٍ منتج تقنيًا </span>
            <div  font="bold" text="4xl" m="4" md="text-3xl light mt-10px" >تعلّم،شارك،وطوّر
<!-- =======
    <div flex="~" justify="between" w="full"  >
        <div w="1/4" >
            <span text="xl mid" whitespace="nowrap">لمجتمعٍ منتج تقنيًا </span>
            <div text="3xl light" m="t-10px" font="bold">تعلّم، شارك، وطوّر
>>>>>>> Stashed changes -->
            </div>
            <div text="mid" mt="12px" w="298px">
                ضمن <span text="light">مشروع قادة التحول الرقمي</span>. الفريق تابع
                رسميًا إلى كلية علوم الحاسوب وتكنولوجيا
                المعلومات، جامعة البصرة.
            </div>
            <div mt="4" flex="~"  md="justify-start" >
                <img src="~/assets/ITLogo.png" width="34.4" height="32" alt="IT" />
                <img src="~/assets/AlbasrahUniversityLogo.png" width="32" height="32" mr="3" alt="IT" />
            </div>
        </div>
        <!-- ... -->
        <div w="2/4" flex="~" justify="center" mr="13" mb="3" md="m-0" >
            <svg  m="t-1.25rem" width="166" height="202.33" viewBox="0 0 696 849" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M344.92 142.769L0 0V92.3893V142.769V285.538V428.308V560.495V702.159V703.265L344.92 848.324L696 703.265V560.495L344.92 703.265L123.186 611.484V479.297L344.92 571.077L696 428.308V285.538L344.92 428.308L123.186 336.527V193.758L344.92 285.538L696 142.769V0L344.92 142.769Z"
                    fill="white" />
            </svg>
        </div>
        <!-- ... -->
        <div w="1/4">
            <div flex="~ col gap-1rem" justify="start" font="bold" w="230px">
                <div flex="~" justify="between">
                    <div flex="~ col">
                        <span text="light 32px">+34</span>
                        <span text="24px">مشروعًا</span>
                    </div>
                    <div flex="~ col">
                        <span text="light 32px">+34</span>
                        <span text="24px">متدربًا</span>
                    </div>
                </div>
                <div flex="~" justify="between">
                    <div flex="~ col">
                        <span text="light 32px">+34</span>
                        <span text="24px">حدثًا</span>
                    </div>
                    <div flex="~ col">
                        <span text="light 32px">+34</span>
                        <span text="24px">صفًا</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div text="3xl mid" mt="8" mb="4">
        الأحداث
    </div>
    <div class="prose prose-gray dark:prose-invert max-w-none" >
        <div grid="~ gap-10  "  justify="center" sm="gap-13px grid-cols-2 m-6 justify-center " md="gap-20 " lg="grid-cols-3 gap-20 m-1" xl="grid-cols-4 gap-10 m-1 " >
            <div  v-if="pending" h="48px" w="48px" text="light" class="i-line-md-loading-twotone-loop" ></div>
            <MiniEvent v-else :path="event._path" v-for="event in events" :key="event"  >
                <template #title>{{ event.title }}</template>
                <template #description>{{ event.description}}</template>
                <template #time>{{ event.time }}</template>
                <template #state>
                    <span :class="textColor(event.state)">{{ stateText(event.state) }}</span>
                </template>
                <template #image>
                    <img :src="event.image" alt="Event image" />
                </template>
            </MiniEvent>
        </div>
    </div>

</template>


<script setup>
const { data: events, pending } = await useAsyncData('events', () => queryContent('events').where({ _type: "markdown" }).limit(4).find())
const { textColor, states, stateText } = useColorState()
states.value = [
    { number: 1, text: "مفتوح" },
    { number: 2, text: "سينتهي التسجيل" },
    { number: 3, text: "أنتهى" },
]

</script>
