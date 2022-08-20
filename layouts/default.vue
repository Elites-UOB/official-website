<template>
    <div h="main-content" p="5.5rem">
        <div flex="~ col gap-10" h="full">
            <Header />
            <div flex="grow">
                <slot />
            </div>
        </div>
    </div>
</template>