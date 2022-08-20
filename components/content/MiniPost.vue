<template>
    <ClientOnly>
        <div text="light">
            <div flex="~ col gap-10px" items="start" justify="center">
                <span @click="router.push(path)" cursor="pointer" text="2xl hover:mid">
                    {{ post.title }}
                </span>
                <div v-if="post.categories?.length > 0" flex="~ gap-10px">
                    <Tag v-for="category in post.categories" :key="category" :title="category" type="category" />                    
                </div>
                <span text="sm mid">
                    {{ post.date }}
                </span>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
const props = defineProps(['path', 'post'])
const router = useRouter()
</script>