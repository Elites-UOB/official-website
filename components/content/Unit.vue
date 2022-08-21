<template>
    <div>
        <div cursor="pointer" @click="$emit('select', unit)" un-text="light" border="3px mid" flex="~" items="center" justify="center" w="10rem" h="5rem">
            <span>{{ unit.name }}</span>
        </div>
    </div>
</template>


<script setup>
const props = defineProps(['unit', 'selected'])

</script>