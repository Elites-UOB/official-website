<template>
    <div flex="~" h="full" items="start" justify="center">
        <div flex="~" w="full">
                <ContentDoc>
                    <!-- Slot if document is not found -->
                    <template #not-found>
                        <h1 class="text-2xl">
                            Page not found
                        </h1>
                    </template>
                </ContentDoc>
        </div>
    </div>
</template>