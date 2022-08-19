<template>
    <div h="main-content" p="5.5rem">
        <div flex="~ col" h="full">
            <Header />
            <div flex="grow">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>