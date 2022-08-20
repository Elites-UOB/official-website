<template>
    <div class="group" position="relative" p="y-5 x-7.5" bg="light opacity-7" m="y-5" dir="ltr" text="left">
        <div flex="~ gap-4" position="absolute" right="15" top="5" dir="rtl" text="light">
            <span v-if="filename" bg="light opacity-5" p="y-2 x-4">
                {{ filename }}
            </span>
            <span v-if="language" bg="light opacity-5" p="y-2 x-4">
                {{ language }}
            </span>
            <span @click="copy()" text="xl" class="invisible group-hover:visible" cursor="pointer" bg="light opacity-5 hover:opacity-10" p="y-2 x-4" flex="~" items="center">
                <div v-if="copied" class="i-fa6-solid-clipboard-check"></div>
                <div v-else class="i-fa6-solid-clipboard"></div>
            </span>
        </div>
        <div text="xl" font="serif" leading="1.625rem">
            <slot />
        </div>
    </div>
</template>


<script setup>
const props = defineProps(['filename', 'language', 'code'])
const copy = () => {
    navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
};
const copied = ref(false)
</script>


<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>