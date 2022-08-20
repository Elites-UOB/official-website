<template>
    <div flex="~ col gap-1rem" w="full">
        <span text="32px light" font="medium">{{ _post.title }}</span>
        <a v-if="person" :href="person.link" decoration="none" cursor="pointer" flex="~ gap-1rem" bg="hover:light hover:opacity-10" p="y-2 x-4" w="fit" un-text="20px mid" items="center">
            <img h="48px" w="48px" rounded="full" :src="person.image" alt="">
            <span>{{ person.name }} - {{ person.title }}</span>
        </a>
        <ClientOnly>
            <div>
                <slot />
            </div>
        </ClientOnly>
    </div>
</template>

<script setup>
import { people } from '../../src/people.json'
const props = defineProps(['id'])
const _post = await queryContent('posts', props.id).findOne()
const person = people.find(person => person.name === _post.person)
</script>