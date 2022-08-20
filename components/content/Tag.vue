<template>
    <div :class="[ textColor, active ? borderColor : 'border-[#ffffff00]' ]" flex="~ gap-6px" items="center" cursor="pointer" bg="#5F5F5F opacity-14 hover:opacity-25" p="y-10px x-15px" border="2">
        <span text="sm">{{ title }}</span>
        <div h="12px" w="12px" class="i-bi-tag-fill"></div>
    </div>   
</template>

<script setup>
const props = defineProps(['title', 'type', 'active'])

const textColor = computed( () => {
    switch (props.type){
        case 'category':
            return 'text-[#2F5DFF]'
        case 'resource':
            return 'text-[#38CC76]'
        default:
            return 'text-[#FFF]'
    }
})
const borderColor = computed( () => {
    switch (props.type){
        case 'category':
            return 'border-[#2F5DFF]'
        case 'resource':
            return 'border-[#38CC76]'
        default:
            return 'border-[#FFF]'
    }
})
</script>