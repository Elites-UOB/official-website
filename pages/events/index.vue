<template>
    <div class="prose prose-gray dark:prose-invert max-w-none">
        <div grid="~ cols-4 gap-19.75">
            <MiniEvent :path="event._path" v-for="event in events" :key="event">
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
const events = await queryContent('events').find()
</script>