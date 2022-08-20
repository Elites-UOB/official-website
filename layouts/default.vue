<template>
    <div class="container" m="x-auto" h="main-content" p="y-4em">
        <div flex="~ col gap-10" h="full">
            <Header />
            <div flex="grow">
                <slot />
            </div>
        </div>
    </div>
</template>