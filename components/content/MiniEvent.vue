<template>
    <ClientOnly>
        <div @click="router.push(path)" h="23.125rem" w="16.6875rem" border="3 mid" text="light" cursor="pointer" bg="hover:light hover:opacity-10">
            <div flex="~ col" items="start" justify="center" p="y-1rem x-1.4375rem">
                <span text="xl">
                    <slot name="title" />
                </span>
                <div h="13.4375rem" m="t-0.5rem" w="full">
                    <slot name="image" />
                </div>
                <div flex="~ gap-0.5rem" m="t-0.5rem" items="center">
                    <span font="semibold" text="mid">
                        <slot name="time" />
                    </span>
                    <span class="text-sm">
                        <slot name="state" />
                    </span>
                </div>
                <p text="xs mid" font="light" h="2.5rem" w="full" leading="1.375rem" class="text-ellipsis overflow-hidden" flex="~" items="start" justify="start" m="0">
                    <slot name="description" />
                </p>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
const props = defineProps(['path'])
const router = useRouter()
</script>