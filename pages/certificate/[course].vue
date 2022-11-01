<template>
    <NuxtLayout name="standard">
        <Suspense>
            <Certificate v-if="course" :course="course" />
            <div v-else>
                No Certificate
            </div>
            <template #fallback>
                Loading...
            </template>
        </Suspense>

    </NuxtLayout>
</template>

<script setup>
const { params: { course: certificateId } } = useRoute()

const course = await queryContent('_courses').where({
    'students': [{ 'certificateId': certificateId }]
}).findOne()

definePageMeta({
    title: () => {
        if (course) return course.title
        return "No Certificate"
    },
})

</script>