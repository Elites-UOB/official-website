<template>
    <div :class="color" flex="~ gap-6px" items="center" cursor="pointer" bg="#5F5F5F opacity-14 hover:opacity-25" p="y-10px x-15px">
        <span text="sm">{{ title }}</span>
        <div h="12px" w="12px" class="i-bi-tag-fill"></div>
    </div>   
</template>

<script setup>
const props = defineProps(['title', 'type'])

const color = computed( () => {
    switch (props.type){
        case 'category':
            return 'text-[#2F5DFF]'
        case 'resource':
            return 'text-[#38CC76]'
        default:
            return 'text-[#FFF]'
    }
})
</script>