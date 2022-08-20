<template>
    <div h="main-content" p="y-3em x-6em">
        <div flex="~ col gap-10" h="full">
            <Header />
            <div flex="grow">
                <slot />
            </div>
        </div>
    </div>
</template>