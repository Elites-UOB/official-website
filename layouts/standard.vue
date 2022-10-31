<template>
    <div class="flex justify-center">
        <img class="h-full w-full opacity-50 dark:opacity-100" src="/line.svg" alt="">
        <div class="max-w-3xl px-4 py-10 m-auto sm:px-8 text-dark dark:text-light absolute top-20">
            <main class="max-w-none">
                <slot />
            </main>
        </div>
    </div>
</template>