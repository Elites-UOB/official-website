<template>
    <div flex="~" h="full" items="start" justify="center">
        <div flex="~" w="full">
            <Post :id="$route.params.id">
                <ContentDoc>
                    <!-- Slot if document is not found -->
                    <template #not-found>
                        <h1 class="text-2xl">
                            Page not found
                        </h1>
                    </template>
                </ContentDoc>
            </Post>
        </div>
    </div>
</template>