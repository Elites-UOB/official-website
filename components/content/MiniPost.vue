<template>
    <ClientOnly>
        <div @click="router.push(path)" text="light" flex="~ col gap-10px" items="start" bg="hover:light hover:opacity-5" p="5" cursor="pointer" justify="center">
            <span text="2xl">
                {{ post.title }}
            </span>
            <div v-if="post.categories?.length > 0" flex="~ gap-10px">
                <Tag v-for="category in post.categories" :key="category" :title="category" type="category" />                    
            </div>
            <span text="sm mid">
                {{ post.date }}
            </span>
        </div>
    </ClientOnly>
</template>

<script setup>
const props = defineProps(['path', 'post'])
const router = useRouter()
</script>