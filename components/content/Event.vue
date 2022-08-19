<template>
    <div flex="~ gap-3.25rem">
        <img w="1/2" :src="_event.image" alt="">
        <div w="1/2" flex="~ col">
            <div h="4.625rem" flex="~" items="end" justify="start">
                <span text="32px" font="medium">{{ _event.title }}</span>
            </div>
            <div flex="~ gap-1rem" text="24px mid" font="semibold">
                <span> {{ _event.time }} - {{ _event.date }} </span>
                <span> لمدة: {{ _event.duration }} </span>
            </div>
            <div flex="~ gap-1.125rem" mt="1rem" text="20px mid">
                <span>حضوري</span>
                <span>مفتوح</span>
            </div>
            <div v-if="person" flex="~ gap-1rem" text="20px" mt="1rem" items="center">
                <img h="56px" w="56px" rounded="full" :src="person.image" alt="">
                <span>{{ person.name }} - {{ person.title }}</span>
            </div>
            <div text="20px mid" mt="1rem">
                <span>{{ _event.collaboration }}</span>
            </div>
            <div text="20px mid" mt="1rem">
                <slot />
            </div>
            <div v-if="_event.details?.length > 0" flex="~ grow gap-1rem" text="20px mid" items="end">
                <span>للمزيد من التفاصيل: </span>
                <a v-for="detail in _event.details" :key="detail.link" :href="detail.link" un-text="mid" target="_blank">
                    <span>{{ detail.title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { people } from '../../src/people.json'
const props = defineProps(['id'])
const _event = await queryContent('events', props.id).findOne()
const person = people.find(person => person.name === _event.person)
</script>