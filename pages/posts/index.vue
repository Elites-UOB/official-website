<template>
    <div flex="~ col" h="full" items="center" justify="center">
        <div flex="~" h="11/12" w="full">
            <div grid="~ sm:cols-1 md:cols-2 lg:cols-2 xl:cols-2 2xl:cols-3 gap-4.375rem" class="auto-rows-min" w="full">
                <div v-if="pending" h="48px" w="48px" text="light" class="i-line-md-loading-twotone-loop"></div>
                <MiniPost v-else @category="selectCategory($event)" :path="post._path" v-for="post in filteredPosts" :key="post" :post="post" />
            </div>
        </div>
        <div h="1/12" w="full" flex="~ col gap-13px">
            <span text="2xl">جميع التصنيفات</span>
            <div flex="~ gap-1rem">
                <Tag @click="selectCategory(selfCategory)" :active="selfCategory == selectedCategory" v-for="selfCategory in categories" :key="selfCategory" :title="selfCategory" type="category" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: posts, pending } = await useAsyncData('posts', () => queryContent('posts').where({ _type: "markdown" }).find())

const categories = ref([])

const selectedCategory = ref(null)
const selectCategory = (category) => {
    if (selectedCategory.value == category) { selectedCategory.value = null; return }
    selectedCategory.value = category
}

posts.value.forEach(post => post.categories.forEach(category => {
    let findCategory = categories.value.find(_category => _category == category)
    if (!findCategory) categories.value.push(category)
}))

const filteredPosts = computed ( () => {
    if (!selectedCategory.value) return [ ...posts.value ].reverse().slice(0, 9);
    return posts.value.filter(post => post.categories.find(category => category == selectedCategory.value))
})

</script>