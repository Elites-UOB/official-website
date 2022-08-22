<template>
    <ClientOnly>
        <div text="light" flex="~ col gap-10px" items="start" bg="light opacity-5" p="5" cursor="pointer" justify="center">
            <span text="2xl">{{ resource.title }}</span>
            <div v-if="resource.categories?.length > 0" flex="~ gap-10px">
                <Tag @click.stop="selectCategory(category)" v-for="category in resource.categories" :key="category" :title="category" type="category" />  
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
    const props = defineProps(['path', 'resource'])
    const router = useRouter()

    const emit = defineEmits(['category'])
    const selectCategory = (category) => emit('category', category)
</script>