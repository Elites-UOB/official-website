<template>
    <div class="prose prose-gray dark:prose-invert max-w-none" >
        <div grid="~ gap-10  "  justify="center" sm=" grid-cols-2 m-6 justify-center " md=" " lg="grid-cols-3  m-1" xl="grid-cols-4  m-1 " >
            <div  v-if="pending" h="48px" w="48px" text="light" class="i-line-md-loading-twotone-loop" ></div>
            <MiniEvent v-else :path="event._path" v-for="event in events" :key="event"  >
                <template #title>{{ event.title }}</template>
                <template #description>{{ event.description}}</template>
                <template #time>{{ event.time }}</template>
                <template #state>
                    <span :class="textColor(event.state)">{{ stateText(event.state) }}</span>
                </template>
                <template #image>
                    <img :src="getimage(event.image)" alt="Event image" />
                </template>
            </MiniEvent>
        </div>
    </div>
</template>

<script setup>
const { data: events, pending } = await useAsyncData('events', () => queryContent('events').where({ _type: "markdown" }).find())
const { textColor, states, stateText } = useColorState()
states.value = [
    { number: 1, text: "مفتوح" },
    { number: 2, text: "سينتهي التسجيل" },
    { number: 3, text: "أنتهى" },
]

function getimage(imgsrc){
    let imageUrl = new URL(`../../assets/img/events/${imgsrc}`, import.meta.url).href
    return imageUrl
}

</script>