<template>
    <div class="prose prose-gray dark:prose-invert max-w-none">
        <div grid="~ cols-4 gap-19.75">
            <div v-if="pending" h="48px" w="48px" text="light" class="i-line-md-loading-twotone-loop"></div>
            <MiniEvent v-else :path="event._path" v-for="event in events" :key="event">
                <template #title>{{ event.title }}</template>
                <template #description>{{ event.description}}</template>
                <template #time>{{ event.time }}</template>
                <template #state>{{ event.state }}</template>
                <template #image>
                    <img :src="event.image" alt="Event image" />
                </template>
            </MiniEvent>
        </div>
    </div>
</template>

<script setup>
const { data: events, pending } = await useAsyncData('events', () => queryContent('events').where({ _type: "markdown" }).find())
</script>