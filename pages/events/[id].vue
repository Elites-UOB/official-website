<template>
    <div flex="~" w="full" items="center" justify="center">
        <div flex="~" w="full" h="2/3" p="2.8125rem" border="2 mid">
            <Event :id="$route.params.id">
                <ContentDoc>
                    <!-- Slot if document is not found -->
                    <template #not-found>
                        <h1 class="text-2xl">
                            Page not found
                        </h1>
                    </template>
                </ContentDoc>
            </Event>
        </div>
    </div>
</template>