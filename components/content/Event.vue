<template>
    <div md="flex gap-3.25rem">
        <img md="w-1/2" w="70" p="0" m="1" :src="_event.image" alt="">
        <div md="w=1/2 flex-col" grid=" cols-1">
            <div h="4.625rem" flex="~" items="end" justify="start">
                <span text="32px light" font="medium">{{ _event.title }}</span>
            </div>
            <div flex="~ gap-1rem" text="24px mid" font="semibold">
                <span> {{ _event.time }} - {{ _event.date }} </span>
                <span> لمدة: {{ _event.duration }} </span>
            </div>
            <div flex="~ gap-1.125rem" mt="1rem" text="20px mid">
                <span>{{ _event.type }}</span>
                <span :class="textColor(_event.state)">{{ stateText(_event.state) }}</span>
            </div>
            <a v-if="person" :href="person.link" cursor="pointer" decoration="none" flex="~ gap-1rem" un-text="mid hover:light 20px" mt="1rem" items="center">
                <img h="56px" w="56px" rounded="full" :src="person.image" alt="">
                <span>{{ person.name }} - {{ person.title }}</span>
            </a>
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
const { textColor, states, stateText } = useColorState()
states.value = [
    { number: 1, text: "مفتوح" },
    { number: 2, text: "سينتهي التسجيل" },
    { number: 3, text: "أنتهى" },
]

</script>